1.  當 PD_CTRL::xtal_pd=1 ， 則 EN PAD可以外灌Clock。
2.  當 PD_CTRL::xtal_pd=0 ， 以及PD_CTRL_1::ext_vfs_ctrl=1，
    則可以透過拉EN Pad，同時設定BOOST_IDLE=1、FS_AMP_PD=0、FS_AMP_PD_VFS=0，
    來打開OPA及讓Boost Idle
3.  當 PD_CTRL::xtal_pd=0 ， 但PD_CTRL_1::ext_vfs_ctrl=0時，拉EN Pad無法設定任何功能，
    只能透過自己設並BOOST_IDLE=1、FS_AMP_PD=0、FS_AMP_PD_VFS=0來打開OPA及讓Boost Idle。
