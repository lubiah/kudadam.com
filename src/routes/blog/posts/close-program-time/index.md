---
title: How to automate closing running applications on Windows with Python
description: How to Automate Closing Applications on Windows with Python. Learn how to create a simple and useful programme that can close any running application on your Windows computer at a specified time using Python.
excerpt: Out of boredom today, I decided to create a Python application capable of automatically closing other applications at the time specified.
image: https://ik.imagekit.io/kudadam/blog/close-program-time/hero
date: 2021-07-15
expiry: 2023-08-20
tags:
  - python
  - windows
---

Out of boredom today, I decided to create a Python application capable of automatically closing other applications at the time specified. This could be a perfect idea for an application, but I do not think I will make it now. Maybe later.

For now, I'm going to name the programme "App Killer." Sounds cool, right? 
I'm going to code it in Python. I'm going to use an object-oriented approach since that seems cooler than functional programming to me.

## How It Will Work

Okay, so the application will be multi-threaded, which means it will execute on multiple threads. The application will request two pieces of information from the user: the name of the programme and its end time. Both will then be processed and run on a separate thread. A function will be executed on each thread to determine when a programme should be terminated. If it should, it terminates the application.

The command `taskkill /IM %application name% /F` will be performed to terminate the application, where `%application name%` is the name of the application to be killed. When the time comes, this command will forcefully close all instances of the application. Isn't it simple?

## Coding The Script

```python
import time as time_module
from threading import Thread
from subprocess import Popen


class AppKiller:
  def __init__(self, name, time):
    self.name = name
    self.time = time

  def get_time(self):
    return str(time_module.strftime("%R"))

  def watch(self):
    def inner_function():
      while self.get_time() != self.time:
        time_module.sleep(2)
      command = Popen(["taskkill","/IM",self.name,"/F"],shell=True)
    Thread(target=inner_function).start()
```

That is the code shown above. It's fairly straightforward. There is an inner function within the `watch` method that checks if the current time is identical to the end time of an app. If it is, the application is terminated. If it isn't, it sleeps for 2 seconds before checking again.

## Using the Script

Now that we are done coding the script, it’s now time to use it. The most suitable way to run this programme was by making it into a CLI tool, but... Let’s just use it a hard-coded way.

So, to make App Killer watch and kill an app, you pass two parameters to its constructor: the app’s executable name and the time at which it is to quit.

So for the example which I am going to be making, I am going to kill two apps: Node JS and my Brave browser. NodeJS will close at 08:30 (i.e., 8:30 AM) and Brave Browser will close at 21:21 (i.e., 9:21 PM).

So in our code, we will write:

```python
brave = AppKiller("brave.exe","21:21")
brave.watch() # [tl! focus]
node_js = AppKiller("node.exe","08:30")
node_js.watch()
```

That's all that is need to initiate the simple program we created.
Now, when you look at the little snippet I wrote, you will notice that the time `21:21` comes before `08:30`. Since each instance of the `AppKiller` class runs on a different thread, the time won't be affected, that is, `brave.exe` will not close before `node.exe`, they will all close when their time is due since they all run on different threads.

Happy Coding! :smile:
