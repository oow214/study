#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>

void read_childproc(int sig)
{
	int status; //종료된 자식?
	pid_t id=waitpid(-1, &status, WNOHANG); // id값이 항상 있다 -> 왜인지 몰랑
//10초뒤에 동시에 실행한다
	if(WIFEXITED(status))
	{
		printf("Removed proc id: %d \n", id);
		printf("Child send: %d \n", WEXITSTATUS(status));
	}
}

int main(int argc, char *argv[])
{
	pid_t pid;
	struct sigaction act;
	act.sa_handler=read_childproc; // read_childproc이거 등록해서 차일드 프로세스 종료해줌?
	sigemptyset(&act.sa_mask);
	act.sa_flags=0;
	sigaction(SIGCHLD, &act, 0);

	pid=fork(); //자식을 만들었음
	if(pid==0) // 자식 프로세서 루틴
	{
		puts("Hi! I'm child process");
		sleep(10);
		return 12;
	}
	else
	{
		printf("Child proc id: %d \n", pid); 
		pid=fork(); //한번더 자식 프로세서 만듦
		if(pid==0)
		{
			puts("Hi! I'm child process");
			sleep(10);
			exit(24); //종료되면 시그차일드발생 -> 핸들러 수행
		}
		else
		{ //여기가 메인
			int i;
			printf("Child proc id: %d \n", pid);
			for(i=0; i<5; i++)
			{
				puts("wait...");
				sleep(5); // 좀비가 되는지 아닌지 확인하려면 wait 개수?를 봐봐?
									// 좀비가 먼지 몰라 저번차(10주)보면서..열심히 생각해보기
			}
		}
	}
	return 0;
}