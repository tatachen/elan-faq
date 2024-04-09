
請確認 Script_DSSS_ON2 的設定是否有正確啟動類比相關的設定
```c
        static uint16_t Script_DSSS_ON2[] =
        {
                PAGE_CTRL, cPage_Master,
                PD_CTRL | Script_AND_INV_Data, ((1 << ADC_PD_B) | (1 << RX_RXPD_B) | (1 << VREF_PD_BG_B)), 
                BOOST_EN_CTRL | Script_AND_INV_Data, ((1 << TX3_EN_B) | (1 << TX2_EN_B) | (1 << TX1_EN_B)), 
                BOR_BOOST_CTRL | Script_AND_INV_Data, ((7 << BOOST_TXTRI_B) | (7 << BOOST_PLDN_B)),         
                RX_AMP_CTRL_0 | Script_AND_INV_Data, (3 << RX_IM_B),                                        
                RX_AMP_CTRL_1 | Script_OR_Data, (1 << RX1EN_B),                                             
                AGC_CTRL_0 | Script_AND_INV_Data, (1 << AGC_PD_B),                                      
                RX_CTRL | Script_OR_Data, (1 << DSSS_EN_B),                                                 
                PAGE_CTRL, cPage_Master, 
                0xFFFF, 0xFFFF           
        };
```