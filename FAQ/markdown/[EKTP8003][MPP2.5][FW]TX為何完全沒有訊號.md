1.  請先確認 Beacon 區間是否設定與 Uplink 打的時間一致，以MPP2.5的範例程式應設定為 8300
    #define MPP_25_TC_CMP_TTW9 7712+588
    ![image](http://192.168.55.95:8089/api/faq/images/mpp25_1.png)

2.  請參考以下的 TC 設定
    TC_0 = MPP_25_TC_CMP_TTW4 + (840 / TC_DIV);
    TC_1 = MPP_25_TC_CMP_TTW7 + (840 / TC_DIV);
    TC_2 = MPP_25_TC_CMP_TTW14 + (840 / TC_DIV);
    TC_3 = MPP_25_TC_CMP_TTW9 - 20; 
    TC_4 = MPP_25_TC_CMP_TTW9 + 490; 
    TC_5 = Frame_Length_MPP25 - 550    
    TC_6 = 2;
    TC_7 = MPP_25_TC_CMP_TTW10 + (840 / TC_DIV);
    TC_8 = MPP_25_TC_CMP_TTW16 + 500;

3.  WG 是否開啟
4.  TC 開啟
5.  State 設定