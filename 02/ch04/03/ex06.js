//
// EC2 인스턴스 종료
//
const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

ec2.terminateInstances({
    InstanceIds: ['i-0112887371112fbfd']
}, function (error, data) {
    if (error) {
        console.log(error, error.stack);
        return;
    }

    console.log(data);
});