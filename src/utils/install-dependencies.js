const core = require('@actions/core')
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function(){
    core.info('=== Downloading and installing SFDX cli ===');
    execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.xz']);
    execCommand.run('mkdir', ['-p', 'cli/sf']);
    execCommand.run('tar', ['xJf', 'sf-linux-x64.tar.xz', '-C', 'cli/sf', '--strip-components', '1']);
    execCommand.run('./cli/sf/install', []);
    core.info('=== SFDX cli installed ===');
};

module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
