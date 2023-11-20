#!/bin/bash -ex

PUBLICNAMES=$(aws ec2 describe-instances \
--filters "Name=instance-state-name,Values=running" \
--query "Reservations[].Instances[].PublicDnsName" \
--output text)

for PUBLICNAME in $PUBLICNAMES; do
	ssh -t -i ~/mykey2.pem ec2-user@$PUBLICNAME \
	"sudo yum -y --security update"
done