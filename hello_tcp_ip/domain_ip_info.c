// 출처: https://simplesolace.tistory.com/entry/tcpip-도메인-이름을-이용해서-IP-주소-얻어오기 [Simple_]

// struct hostent {
// 		char    *h_name;           // 호스트 이름
// 		char    **h_aliases;       // 호스트 별명들
//     int     h_addrtype;        // 주소종류(AF_INET = 2)
//     int     h_length;          // 주소크기(바이트)
//     char    **h_addr_list;     // IP주소 리스트(포인터 배열)
// }

#include <stdio.h>
#include <ctype.h>
#include <arpa/inet.h>
#include <netdb.h>


int main(int argc, char **argv) {
    struct hostent *ht;
    struct in_addr addr;

    char *host = argv[1];

    // 주소가 도메인이면 도메인 주소로 IP 받아오기
    if (isalpha(host[0])) {
        ht = gethostbyname(host);
        printf("Domain To IP = %s\n", inet_ntoa(*(struct in_addr*)ht->h_addr));
    }
    // 주소가 IP 주소이면 도메인 정보 받아오기
    else {
        addr.s_addr = inet_addr(host);

        ht = gethostbyaddr((char*)&addr, 4, AF_INET);
        printf("IP to Domain = %s\n", ht->h_name);
    }

    return 0;

}
