IP沒有外灌輸入ripple的規格，基本上，都是整個系統需求看待，  
因為在IC電源輸入端本就掛Bulk與decouple電容，  
我們也不知道解RX信號的容錯率是多少？  
以TP模組經驗為參考，提供如下：  
    AVDD：follow TP的規格，可容忍ripple為0.1Vp-p(@30Hz~3.5KHz)，大於3.5KHz則需小於0.1V。  
    越高頻容忍越低。  
    AVDD有LDO，給RX(RX AFE、VREF與ADC)用。  
    CVDD：為數位1.8V電源，數位的margin較大，CVDD±10%(含ripple)。  
    但因為有FNPLL吃這個電源，所以建議ripple控制在50mVp-p內，FNPLL頻率波動可控制在±3.1%  內(模擬結果)，基本上平均頻率還是正確的，這裡說的±3.1%是瞬間最大變動量。  
    VDDIO：為I/O電源，VDDIO±10%(含ripple)。  
    SW：不是電源輸入。  
    CVDD與VDDIO為數位電源，noise margin較大，一般含ripple不要超過±10%即可。