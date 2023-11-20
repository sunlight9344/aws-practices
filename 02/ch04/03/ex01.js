//
// AMI 정보 가져오기
//
const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

ec2.describeImages({
    Filters: [{
        Name: 'name',
        Values: ['amzn2-ami-hvm-2.0.????????-x86_64-gp2']
    }, {
        Name: 'state',
        Values: ['available']
    }],
    Owners: ['amazon']
}, function (error, data) {
    if (error) {
        console.log(error, error.stack);
        return;
    }
    console.log(data);
});
