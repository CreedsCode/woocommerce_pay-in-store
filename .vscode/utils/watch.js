var fs = require("fs");
const { exec, spawn } = require("child_process");

fs.watch("../../",{recursive: true}, async function(evt, name) {
  spawn("rsync", ["-avu", '--exclude=".*"', "--delete","../../","../../../wp-content/plugins/woocommerce_pay-in-store"]);
});
