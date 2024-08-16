from collections import deque

def get_who_win_with_diff(ryan, apeach):
    ryan_sum = 0
    apeach_sum = 0
    for i in range(len(ryan)):
        if ryan[i] == apeach[i] and ryan[i] != 0:
            apeach_sum += 10 - i
        elif ryan[i] > apeach[i]:
            ryan_sum += 10 - i
        elif ryan[i] < apeach[i]:
            apeach_sum += 10 - i
    
  
    return ryan_sum - apeach_sum if ryan_sum > apeach_sum else -1

def solution(n, info):
    q = deque()
    result = []
    max_diff = -1
    q.append([n, 0, [0] * 11])
    
    while q:
        left_arrow, idx, ryan_info = q.popleft()
        
        # 남은 화살이 없는 경우
        if left_arrow == 0:
            diff = get_who_win_with_diff(ryan_info, info)
            if diff > max_diff:
                max_diff = diff
                result = ryan_info[:]
            elif diff == max_diff:
                is_new_possible = False
                for i in range(10, -1, -1):
                    if ryan_info[i] > result[i]:
                        is_new_possible = True
                        break
                if is_new_possible:
                    result = ryan_info[:]
        
        # 마지막 쏘는 데 화살이 남은 경우
        elif idx == 10:
            last_array = ryan_info[:]
            last_array[10] = left_arrow
            diff = get_who_win_with_diff(last_array, info)
            if diff > max_diff:
                max_diff = diff
                result = last_array[:]
            elif diff == max_diff:
                is_new_possible = False
                for i in range(10, -1, -1):
                    if last_array[i] > result[i]:
                        is_new_possible = True
                        break
                if is_new_possible:
                    result = last_array[:]
        
        else:
            # 라이언이 아예 안쏘는 경우
            q.append([left_arrow, idx + 1, ryan_info[:]])
            
            # 라이언이 화살 쏘는 경우
            if info[idx] + 1 <= left_arrow:
                array = ryan_info[:]
                array[idx] = info[idx] + 1
                q.append([left_arrow - (info[idx] + 1), idx + 1, array])
    
    return result if result else [-1]

info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]
n = 10
print(solution(n, info))