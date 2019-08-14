class Solution:
 def isValid(self, s):
     front=["(","{","["]
     back =[")","}","]"]
     stack=[];
     for elem in s:
         if elem in front:
            stack.append(elem)
         if elem in back:
             if(len(stack)):
                stack.pop()
             else:
                 print("no")
                 break;
         
     if(len(stack)):
         print("no")
     else:
         print("yes")
            
            
     







s = "()(){(())" 
print(Solution().isValid(s))
