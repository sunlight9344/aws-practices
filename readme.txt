1. 인스턴스 생성
    tag
        Name: MyWebServer
    보안그룹
        규칙추가 - 인터넷 연결을 위해서 필요하
            Httpd
            ssh

    keypair
        ftp 사용이 필요함

    httpd 시작하기
        인스턴스 연결
        sudo -s
        yum install httpd -y
        nano /var/www/html/index.html
        service httpd start
        