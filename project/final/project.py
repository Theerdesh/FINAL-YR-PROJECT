import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn import svm
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier
import matplotlib.pyplot as plt
import joblib
import tkinter as Tk
import joblib
from tkinter import *
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras 
from tensorflow.keras import layers
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import Convolution2D
from tensorflow.keras.layers import MaxPooling2D
from tensorflow.keras.layers import Flatten
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
data = pd.read_csv('heart.csv')
df = pd.DataFrame(data)
data_dup = df.duplicated().any()
print(data_dup)
df.drop_duplicates()
data.isnull().sum()
df=df.drop_duplicates()
data_dup = df.duplicated().any()
print(data_dup)
cate_val=[]
cont_val=[]
for column in df.columns:
    if df[column].nunique()<=10:
        cate_val.append(column)
    else:
        cont_val.append(column)
    
        
print(cate_val)
print(cont_val)
df['cp'].unique()
cate_val.remove('sex')
cate_val.remove('target')
df=pd.get_dummies(df,columns=cate_val,drop_first=True)
print(df.head())
st=StandardScaler()
df[cont_val]=st.fit_transform(df[cont_val])
print(df.head())
X=df.drop('target',axis=1)
y=df['target']
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=42)
print(X_train)
knn=KNeighborsClassifier()
score=[]
for k in range(1,40):
    knn= KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train,y_train)
    y_pred=knn.predict(X_test)
    score.append(accuracy_score(y_test,y_pred))
knn= KNeighborsClassifier(n_neighbors=2)
knn.fit(X_train,y_train)
y_pred2=knn.predict(X_test)
accuracy_score(y_test,y_pred2)
df = pd.read_csv('heart.csv')
df1 = pd.DataFrame(df)
df1 = df1.drop_duplicates()
print(df1.shape)
//
X=df1.drop('target',axis=1)
y=df1['target']
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=42)
dt= DecisionTreeClassifier()
dt.fit(X_train,y_train)
from sklearn.linear_model import LogisticRegression
lr = LogisticRegression()
lr.fit(X_train,y_train)
y_pred1=lr.predict(X_test)
accuracy_score(y_test,y_pred1)
svm = svm.SVC()
svm.fit(X_train,y_train)
y_pred4 = svm.predict(X_test)
accuracy_score(y_test,y_pred4)
rf = RandomForestClassifier()
rf.fit(X_train,y_train)
y_pred5 =rf.predict(X_test)
accuracy_score(y_test,y_pred5)
gbc = GradientBoostingClassifier()
gbc.fit(X_train,y_train)
y_pred6 =  gbc.predict(X_test)
accuracy_score(y_test,y_pred6)
final_model = pd.DataFrame({'Models': ['LR','KNN','DT','SVC','RF','GBC'],'ACC':[accuracy_score(y_test,y_pred1),
                                                                                 accuracy_score(y_test,y_pred2),
                                                                                 accuracy_score(y_test,y_pred3),
                                                                                 accuracy_score(y_test,y_pred4),
                                                                                 accuracy_score(y_test,y_pred5),
                                                                                 accuracy_score(y_test,y_pred6)]})
print(final_model)
final_model.plot.bar(x='Models', y='ACC', rot=0
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
new_data = pd.DataFrame({
    'age':52,
    'sex':1,
    'cp':0,
    'trestbps':125,
    'chol':212,
    'fbs':0,
    'restecg':1,
    'thalach':168,
    'exang':0,
    'oldpeak':1.0,
    'slope':2,
    'ca':2,
    'thal':3
},index=[0])
print(new_data)
pre=rf.predict(new_data)
joblib.dump(rf,'heart_prediction_model')
model =joblib.load('heart_prediction_model')
model.predict(new_data)
def entry_fields():
    p1=int(e1.get())
    p2=int(e2.get())
    p3=int(e3.get())
    p4=int(e4.get())
    p5=int(e5.get())
    p6=int(e6.get())
    p7=int(e7.get())
    p8=int(e8.get())
    p9=int(e9.get())
    p10=float(e10.get())
    p11=int(e11.get())
    p12=int(e12.get())
    p13=int(e13.get())
    model = joblib.load('heart_prediction_model')
    result= model.predict([[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13]])
    if result <= 0.5:
        Label(root,text="No Disesase").grid(row=35,column=100)
    else:
        Label(root,text = "Possibility of Heart Diseases").grid(row=35,column=100)
root = Tk()
root.title('Heart Diasease Prediction')

root.geometry("600x600")
Label(root,text="Enter Your Age").grid(row=1,columnspan=15)
Label(root,text="Male or Female(0/1)").grid(row=3,columnspan=15)
Label(root,text="Enter Your cp").grid(row=5,columnspan=15)
Label(root,text="Enter Your trestbps").grid(row=7,columnspan=5)
Label(root,text="Enter Your Cholestral ").grid(row=9,columnspan=5)
Label(root,text="Enter Your fbs ").grid(row=11,columnspan=5)
Label(root,text="Enter Your restecg").grid(row=13,columnspan=5)
Label(root,text="Enter Your thalach").grid(row=15,columnspan=5)
Label(root,text="Enter Your exang").grid(row=17,columnspan=5)
Label(root,text="Enter Your oldpeak").grid(row=19,columnspan=5)
Label(root,text="Enter Slope").grid(row=21,columnspan=5)
Label(root,text="Enter ca").grid(row=23,columnspan=5)
Label(root,text="Enter Thal").grid(row=25,columnspan=5)
e1=Entry(root)
e2=Entry(root)
e3=Entry(root)
e4=Entry(root)
e5=Entry(root)
e6=Entry(root)
e7=Entry(root)
e8=Entry(root)
e9=Entry(root)
e10=Entry(root)
e11=Entry(root)
e12=Entry(root)
e13=Entry(root)
e1.grid(row=1,column=1000)
e2.grid(row=3,column=1000)
e3.grid(row=5,column=1000)
e4.grid(row=7,column=1000)
e5.grid(row=9,column=1000)
e6.grid(row=11,column=1000)
e7.grid(row=13,column=1000)
e8.grid(row=15,column=1000)
e9.grid(row=17,column=1000)
e10.grid(row=19,column=1000)
e11.grid(row=21,column=1000)
e12.grid(row=23,column=1000)
e13.grid(row=25,column=1000)
Button(root,text="predict",command=entry_fields).grid(row=27,column=50)

root.mainloop()
train_data =ImageDataGenerator(rescale =1./255,shear_range =0.2,zoom_range=0.2,horizontal_flip=True)
test_data = ImageDataGenerator(rescale =1./255)
x_train = train_data.flow_from_directory("data/train",target_size =(64,64),batch_size = 32,class_mode="categorical")
x_test=test_data.flow_from_directory("data/test",target_size =(64,64),batch_size = 32,class_mode="categorical")
model = Sequential()
model.add(MaxPooling2D(pool_size = (2,2)))
model.add(Convolution2D(32,(3,3),activation='relu'))
model.add(MaxPooling2D(pool_size=(2,2)))
model.add(Flatten())
model.add(Dense(units = 128,kernel_initializer = "random_uniform",activation = "relu"))
model.add(Dense(units = 128,kernel_initializer = "random_uniform",activation = "relu"))
model.add(Dense(units = 128,kernel_initializer = "random_uniform",activation = "relu"))
model.add(Dense(units = 128,kernel_initializer = "random_uniform",activation = "relu"))
model.add(Dense(units = 128,kernel_initializer = "random_uniform",activation = "relu"))
model.add(Dense(units = 6,kernel_initializer = "random_uniform",activation = "softmax"))
model.compile(optimizer='adam',loss='categorical_crossentropy',metrics=['accuracy'])
model.fit_generator(generator= x_train,steps_per_epoch = len(x_train), epochs=9, validation_data=x_test,validation_steps = len(x_test))
#Saving Model.
model.save('ECG.h5')
model=load_model('ECG.h5')
img=image.load_img("normal.png",target_size=(64,64))
x=image.img_to_array(img)
x=np.expand_dims(x,axis=0)
pred = model.predict(x)
y_pred=np.argmax(pred)
index=['left Bundle Branch block',
       'Premature Atrial Contraction',
       'Premature Ventricular Contraction',
       'Right Bundle Branch Block',
       'Ventricular Fibrillation']
result = str(index[y_pred])
print(result)







                     
