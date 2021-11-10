#include <stdio.h>
#include <unistd.h>
#include <signal.h>

void timeout(int sig)
{
	if(sig==SIGALRM)
		puts("Time out!");
	alarm(2);	
}

//여러가지 os에서 호환성을 위한 사용법
int main(int argc, char *argv[])
{
	int i;
	struct sigaction act;
	act.sa_handler=timeout; 
	sigemptyset(&act.sa_mask); //0으로 초기화
	act.sa_flags=0; //0으로 초기화
	sigaction(SIGALRM, &act, 0); //siglrm이 발생하면 act안에 있는 멤버인 sa_handler 실행

	alarm(2);

	for(i=0; i<3; i++)
	{
		puts("wait...");
		sleep(100);
	}
	return 0;
}