class Tasks:

    def __init__(self, name, priority=3):
        self.name = name
        self.priority = priority

    def __init__(self, name, duration=1):
         self.name = name
         if duration > 1:
             self.duration = duration
         else:
             raise ValueError(
         " A duração tem que ser maior que uma hora!"
          )










