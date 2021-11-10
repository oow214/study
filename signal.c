#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

void timeout(int sig) {
	if (sig == SIGALRM) {
		puts("Tiem out!");
	}
	// alarm(2); // 제거하면 wait Time out! 한번만 나옴
}

void keycontrol(int sig) {
	if (sig == SIGINT)
		puts("CTRL+C pressed");
}



int main(int argc, char *argv[])
{
	int i;
	signal(SIGALRM, timeout);
	signal(SIGINT, keycontrol); // 주석처리하면 3초후에 / ctrl-c는 강제종료 
								// 디폴트 핸들러가 실행됨
	alarm(2);  // 2초 뒤에 SIGALRM 시그널 발생
	for (i = 0; i < 3; i++) {
		puts("wait....");
		sleep(100);
	}
	return 0;
}

