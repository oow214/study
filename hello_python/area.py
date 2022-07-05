PI = 3.14

# 원의 면적을 구해 주는 함수
def circle(radius):
      return PI * radius * radius

# 정사각형의 면적을 구해 주는 함수
def square(length):
      return length * length

# 함수들을 테스팅 하는 메인 함수
def main():
# circle 함수 테스트
      print(circle(2) == 12.56)
      print(circle(5) == 78.4)

# square 함수 테스트
      print(square(2) == 4)
      print(square(5) == 25)

if __name__ == '__main__':
    main()
