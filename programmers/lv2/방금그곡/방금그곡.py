# 시작되고 끝난 시간, 음악 제목,  악보

# 라디오에서 재생시간이 가장 긴 음악
m = "ABCDEFG"
musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]

dic = {
  "C#" : 'H', 
  "D#" : 'I', 
  "F#" : 'J', 
  "G#" : 'K', 
  'A#' : "L",
  "B#": "M" 
}
alpabet = ["C#", "D#", "F#", "G#", 'A#', "B#"]
def get_change_str (s):
  result = s
  for a in alpabet:
    if a in s:
      result = result.replace(a, dic[a])
  return result


def get_time_range (start, end):
  s_h, s_m = start.split(":")
  e_h, e_m = end.split(":")

  if (s_m <= e_m):
    return int(e_m) - int(s_m) + (int(e_h) - int(s_h)) * 60
  else:
    return int(e_m) + 60 - int(s_m) + (int(e_h) - 1 - int(s_h)) * 60

def solution (m, musicinfos):
# 1. 라디오에서 재생된 시간의 알맞은 악보 문자열 만들기
# 포함 여부 확인
  m = get_change_str(m)
  answer = '(None)'
  howLong = -1

  for music in musicinfos:
    start, end, name, tempo = music.split(",")
    tempo = get_change_str(tempo)
    howLongTime = get_time_range(start, end)

    real_tempo = ''
    length = len(tempo)
    if (length >= howLongTime):
    
      real_tempo = tempo[0:howLongTime]
    else:
      real_tempo = tempo * (howLongTime // length) + tempo[0: (howLongTime % length)]
    
    if m in real_tempo:
      if howLong < 0 or howLong < howLongTime:
        howLong = howLongTime
        answer = name
    
  return answer

print(solution(m, musicinfos))
