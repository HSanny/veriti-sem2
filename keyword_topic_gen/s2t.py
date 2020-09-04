import speech_recognition as sr
import youtube_dl
import ffmpy
r = sr.Recognizer()
#r = r.recognize_google()

#with youtube_dl.YoutubeDL() as ydl:
#    ydl.download(['https://www.youtube.com/watch?v=ONAzCxAwwrc'])
news = sr.AudioFile('audio30.wav')
with news as source:
    audio = r.record(source)
print(r.recognize_google(audio))
