const os = require('os-utils');
const { exec } = require('child_process');

function monitorCPU() {
  setInterval(() => {
    os.cpuUsage((usage) => {
      if (usage > 0.7) {
        console.log('High CPU Usage, Restarting Server...');
        exec('pm2 restart all');
      }
    });
  }, 3000);
}
module.exports = monitorCPU;