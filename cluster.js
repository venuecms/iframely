import { GracefulCluster } from 'graceful-cluster';
import * as sysUtils from './utils.js';

process.title = 'iframely-cluster';

// Limit workers to avoid exhausting memory on small instances. Honors
// WEB_CONCURRENCY (set by hosts like Render) or WORKERS; falls back to
// os.cpus().length (graceful-cluster's default) when unset.
var workersCount = parseInt(process.env.WEB_CONCURRENCY || process.env.WORKERS, 10) || undefined;

GracefulCluster.start({
    workersCount: workersCount,
    log: sysUtils.log,
    shutdownTimeout: CONFIG.SHUTDOWN_TIMEOUT,
    disableGraceful: CONFIG.DEBUG,
    restartOnTimeout: CONFIG.CLUSTER_WORKER_RESTART_ON_PERIOD,
    restartOnMemory: CONFIG.CLUSTER_WORKER_RESTART_ON_MEMORY_USED,
    serverFunction: function() {
        import('./server.js');
    }
});
