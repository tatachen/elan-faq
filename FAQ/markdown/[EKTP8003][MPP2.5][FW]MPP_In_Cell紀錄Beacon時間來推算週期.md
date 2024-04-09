會紀錄兩次TC的時間，  
設定TC0_TAG_CTRL的 bit4來開關此功能，  
設定bit0=1會記錄當下的TC0時間在TC0_TAG0之中，  
設定bit1=1會記錄當下的TC0時間在TC0_TAG1之中，  
可以利用RX收完讓MCU在decode時，決定TC0_TAG_CTRL要設bit0還是bit1，  
之後找時間再將TC0_TAG0和TC0_TAG1的數值做相減得到時間差  

![image](http://192.168.55.95:8089/api/faq/images/mpp25_3.png)
