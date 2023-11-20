//
// EC2 인스턴스 생성
//
const AWS = require('aws-sdk');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

ec2.runInstances({
    ImageId: 'ami-07464b2b9929898f8',
    MaxCount: 1,
    MinCount: 1,
    Monitoring: {
        Enabled: false
    },
    DryRun: false,
    InstanceType: 't2.micro',
    KeyName: 'mykey2'
}, function (error, data) {
    if (error) {
        console.log(error, error.stack);
        return;
    }
    console.log(data);
});
