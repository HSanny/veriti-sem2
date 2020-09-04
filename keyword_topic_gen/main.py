import speech_recognition as sr
import youtube_dl
import ffmpy
import gensim
from gensim.utils import simple_preprocess
from gensim.parsing.preprocessing import STOPWORDS
import nltk
from nltk.stem import WordNetLemmatizer, SnowballStemmer
from nltk.stem.porter import *
from collections import Counter
import numpy as np
import spacy
from sklearn.datasets import fetch_20newsgroups
r = sr.Recognizer()
#nltk.download('wordnet')
#r = r.recognize_google()

#with youtube_dl.YoutubeDL() as ydl:
   # ydl.download(['https://www.youtube.com/watch?v=8lrY81Zmnuc'])
#news = sr.AudioFile('audio_3.wav')
news = sr.AudioFile('audio60.wav')
with news as source:
    audio = r.record(source)
text = r.recognize_google(audio)

newsgroups_train = fetch_20newsgroups(subset='train', shuffle = True)
nlp = spacy.load("en_core_web_lg")
stemmer = SnowballStemmer('english')

def lemmatize_stemming(text):
    return stemmer.stem(WordNetLemmatizer().lemmatize(text,pos='v'))

def preprocess(text):
    result=[]
    for token in gensim.utils.simple_preprocess(text):
        if token not in gensim.parsing.preprocessing.STOPWORDS and len(token) > 3:
            result.append(lemmatize_stemming(token))

    return result
def top_words(text):
    processed_text = []
     
    text = preprocess(text)
    c = [word for word in text]
    d = {item:c.count(item) for item in c}
    #dictionary = gensim.corpora.Dictionary(processed_text)
    top = Counter(d)
    top = top.most_common(10)
    #keys = list(top) 
    keys = []
    for i in top:
        keys.append(i[0])
    return keys


def cat(top):
    pos = -1
    maxval = -2
    categories = ["World","Australia","Business","Sport","Technology","Food", "Science"]
    for word in top: 
        for cate in categories:
            tokenword = nlp(word)
            tokencat= nlp(cate)
            tokenval = tokencat.similarity(tokenword)
           # print(word)
           # print(cate)
            #print(tokenval)

            if (tokenval> maxval):
                maxval = tokenval
                category = cate 
        
    return(category)
    



print(top_words(text))
print(cat(top_words(text)))
