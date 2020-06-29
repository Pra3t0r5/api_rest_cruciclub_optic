module.exports = {
  apps: [{
    name: "api-rest",
    script: "bin/www",
    watch: true,
    watch_delay: 1000,
    max_memory_restart: "500M",
    ignore_watch: [
      "node_modules",
      "logger.log",
      "payments.json",
      "package*",
      ".git*",
      ".vscode",
      ".optic",
      "optic.yml"
    ],
    env: {
      NODE_ENV: "development",
      instances: 1,
      exec_mode: "fork_mode",
      // PORT: 3000
    },
    env_production: {
      cwd: "/var/www/api-rest-cruciclub",
      instances: 0, //one per core
      exec_mode: "cluster",
      NODE_ENV: "production",
      PORT: 3000
    }
  }, {
    name: "web-publica",
    cwd: "/var/www/backend-crucijuegos",
    script: "app.js",
    exec_mode: "fork_mode",
    watch: false,
    watch_delay: 1000,
    max_memory_restart: "1G",
    ignore_watch: ["node_modules", ".tmp"],
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
}