//
// EC2 인스턴스 정보
//
const AWS = require('aws-sdk');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

ec2.describeInstances({
    Filters: [{
        Name: 'availability-zone',
        Values: ['ap-northeast-2a']
    }],
    InstanceIds: ['i-0112887371112fbfd']
}, function (error, data) {
    if (error) {
        console.log(error, error.stack);
        return;
    }

    console.log(data);
});