# https://school.programmers.co.kr/learn/courses/30/lessons/49993

def solution (skill, skill_trees):
  table = {}
  table[skill[0]] = []
  for i in range(1, len(skill)):
    table[skill[i]] = list(skill[:i])

  def get_collect_skill (skills):
    flag = True
    for i in range(len(skills)):
      if skills[i] not in table.keys():
        continue
      temp = 0
      for prev in table[skills[i]]:
        idx = skills[:i].find(prev)
        if idx < temp:
          flag = False
          break
        temp = idx
      if not flag:
        break
    return flag
  result = 0
  for s in skill_trees:
    if get_collect_skill(s):
      result += 1
  return result
skill = "CBD"
skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
print(solution(skill, skill_trees))

# 좋은 풀이
answer = 0
for i in skill_trees:
  skillist = ''
  for z in i:
    if z in skill:
      skillist += z # BCD
  if skillist == skill[:len(skillist)]:
    answer += 1
print(answer)
  
