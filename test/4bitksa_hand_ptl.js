* JSIM deck file generated with Die2Sim
* ---------------------------------------------------------------------------
* === SUBCIRCUITS ===
*****************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 16 Oct 2016, CJ Fourie, SU    *
*   (Optimized)                          *
******************************************
.SUBCKT PTLTX 1 2 
*==============  Begin SPICE netlist of main design ============
B01        3          7          jmitll     area=2
B02        4          6          jmitll     area=1.62
IB01       0          10         pwl(0      0 5p 230u)
IB02       0          11         pwl(0      0 5p 82u)
L01        1          3          2.5p      
L02        3          4          3.3p      
L03        4          5          0.35p     
LP01       0          7          0.05p     
LP02       0          6          0.12p     
LPR01      3          10         0.2p      
LPR02      4          11         1.3p      
LRB01      7          8          1p        
LRB02      6          9          1p        
RB01       8          3          4.85      
RB02       9          4          6.3       
RINS       5          2          1.36      
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160ohm, rn=16ohm, icrit=0.1mA)
.ends PTLTX
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 16 Oct 2016, CJ Fourie, SU    *
*   (Optimized)                          *
******************************************
.SUBCKT PTLRX 2 6 
*==============  Begin SPICE netlist of main design ============
B01        1          9          jmitll     area=1
B02        4          8          jmitll     area=1
B03        5          7          jmitll     area=1
IB01       0          10         pwl(0      0 5p 155u)
L01        2          1          0.2p      
L02        1          3          4.3p      
L03        3          4          4.6p      
L04        4          5          5.0p      
L05        5          6          2.3p      
LP01       0          9          0.34p     
LP02       0          8          0.06p     
LP03       0          7          0.03p     
LPR01      3          10         0.2p      
LRB01      9          11         0.5p      
LRB02      8          12         1p        
LRB03      7          13         1p        
RB01       11         1          9.7       
RB02       12         4          9.7       
RB03       13         5          9.7       
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160ohm, rn=16ohm, icrit=0.1mA)
.ends PTLRX
*****************************************
.SUBCKT mitll_dcsfq 8 11 
*==============  Begin SPICE netlist of main design ============
B1         1          2          jjmitll100 area=2.25
B2         3          4          jjmitll100 area=2.25
B3         5          6          jjmitll100 area=2.5
IB1        0          2          pwl(0      0 5p 275uA)
IB2        0          5          pwl(0      0 5p 175uA)
L1         8          7          1p        
L2         7          0          3.9p      
L3         7          1          0.6p      
L4         2          3          1.1p      
L5         3          5          4.5p      
L6         5          11         2p        
Lp2        4          0          0.2p      
Lp3        6          0          0.2p      
LRB1       9          2          1p        
LRB2       10         4          1p        
LRB3       12         6          1p        
RB1        1          9          4.31      
RB2        3          10         4.31      
RB3        5          12         3.88      
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_dcsfq
*******************************
.SUBCKT mitll_jtl 200 500 
*==============  Begin SPICE netlist of main design ============
B1         1          6          jjmitll100 area=2.5
B2         4          8          jjmitll100 area=2.5
IB1        0          3          pwl(0      0 5p 350uA)
L1         2          1          2p        
L2         1          3          2p        
L3         3          4          2p        
L4         4          5          2p        
LB1        7          6          1p        
LB2        9          8          1p        
Lp1        6          0          0.2p      
Lp2        8          0          0.2p      
RB1        1          7          3.88      
RB2        4          9          3.88      
XPIN       PTLRX      200        2         
XPOUT      PTLTX      5          500       
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_jtl
.SUBCKT JTLTOUT 2 50 
*==============  Begin SPICE netlist of main design ============
B1         1          6          jjmitll100 area=2.5
B2         4          8          jjmitll100 area=2.5
IB1        0          3          pwl(0      0 5p 350uA)
L1         2          1          2p        
L2         1          3          2p        
L3         3          4          2p        
L4         4          5          2p        
LB1        7          6          1p        
LB2        9          8          1p        
Lp1        6          0          0.2p      
Lp2        8          0          0.2p      
RB1        1          7          3.88      
RB2        4          9          3.88      
XPOUT      PTLTX      5          50        
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends JTLTOUT

*****************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 9 Oct 2016, CJ Fourie, SU     *
*   (optmized)                           *
******************************************
*$Parameters
*IT=1.11e-3
*$EndP
******************************************
*                 IN_A   IN_B   OUT     CLK     
*$Ports           in_a   in_b   out_out in_clk  
.SUBCKT gen_and   200    400    320     140       
*
*==============  Begin SPICE netlist of main design ============
XPINA      PTLRX      200        2         
XPINB      PTLRX      400        40        
XPINCLK    PTLRX      140        14        
XPOUT      PTLTX      32         320       
B01        6          12         jmitll     area=1.21
B02        44         49         jmitll     area=1.21
B03        7          24         jmitll     area=1.05
B04        50         45         jmitll     area=1.05
B05        25         26         jmitll     area=1.5
B06        26         51         jmitll     area=1.5
B07        27         28         jmitll     area=1.5
B08        18         23         jmitll     area=1.38
B09        30         31         jmitll     area=2.25
B10        3          11         jmitll     area=1.755
B11        41         48         jmitll     area=1.755
B12        1          9          jmitll     area=2.175
B13        39         47         jmitll     area=2.175
B14        15         22         jmitll     area=1.265
B15        13         21         jmitll     area=2.175
IB01       0          8          pwl(0      0 5p 120u)
IB02       0          46         pwl(0      0 5p 120u)
IB03       0          33         pwl(0      0 5p 70u)
IB05       0          34         pwl(0      0 5p 230u)
IB06       0          52         pwl(0      0 5p 230u)
IB07       0          20         pwl(0      0 5p 120u)
IB08       0          57         pwl(0      0 5p 220u)
L01        7          25         2.844p    
L02        51         45         2.904p    
L03        3          5          2.054p    
L04        41         43         2.057p    
L05        19         24         2.132p    
L06        50         19         2.171p    
L07        17         18         1.924p    
L08        27         29         0.039p    
L09        29         30         2.6p      
L10        30         32         2.47p     
L11        4          3          2.5375p   
L12        42         41         2.4p      
L13        2          1          2p        
L14        40         39         2p        
L15        5          6          9.521p    
L16        43         44         9.547p    
L17        14         13         2p        
L18        16         15         2.511p    
L19        15         17         0.239p    
L20        26         27         0.499p    
L21        6          7          0.148p    
L22        44         45         0.179p    
L23        18         19         0.01p     
L24        1          4          2.5375p   
L25        39         42         2.4p      
L26        13         16         2.511p    
LP01       0          12         0.255p    
LP02       0          49         0.229p    
LP07       0          28         0.299p    
LP08       0          23         0.211p    
LP09       0          31         0.174p    
LP10       0          11         0.221p    
LP11       0          48         0.203p    
LP12       0          9          0.203p    
LP13       0          47         0.195p    
LP14       0          22         0.187p    
LP15       0          21         0.19p     
LPR1       5          8          0.013p    
LPR2       43         46         0.01p     
LPR3       29         33         1.901p    
LPR4       17         20         0.85p     
LPR5       4          34         0.166p    
LPR6       42         52         0.172p    
LPR8       16         57         0.166p    
LRB01      36         12         1p        
LRB02      55         49         1p        
LRB03      37         24         1p        
LRB04      50         56         1p        
LRB05      38         26         1p        
LRB06      26         61         1p        
LRB07      62         28         1p        
LRB08      60         23         1p        
LRB09      63         31         1p        
LRB10      35         11         1p        
LRB11      54         48         1p        
LRB12      10         9          1p        
LRB13      53         47         1p        
LRB14      59         22         1p        
LRB15      58         21         1p        
RB01       36         6          7.8       
RB02       55         44         7.8       
RB03       37         7          9.6       
RB04       45         56         9.6       
RB05       38         25         6.5       
RB06       51         61         6.5       
RB07       62         27         6.5       
RB08       60         18         6.7       
RB09       63         30         4.3       
RB10       35         3          5.5       
RB11       54         41         5.5       
RB12       10         1          4.4       
RB13       53         39         4.4       
RB14       59         15         7.7       
RB15       58         13         4.4       
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends gen_and
*******************************
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 27 Nov 2016, CJ Fourie, SU    *
*   (Added IB06, L16, optimized)         *
******************************************
*$Parameters
*IT=910e-6
*$EndP
******************************************
*                 IN_A  IN_B  OUT       CLK     
*$Ports           in_a  in_b  out_out   in_clk  
.SUBCKT mitll_xor 200   600   270       100
*==============  Begin SPICE netlist of main design ============
XPINA      PTLRX      200        2         
XPINB      PTLRX      600        6         
XPINCLK    PTLRX      100        10        
XPOUT      PTLTX      27         270       
B01        3          31         jmitll     area=2.5
B02        1          32         jmitll     area=1.75
B03        3          12         jmitll     area=1.69
B04        7          29         jmitll     area=2.5
B05        5          30         jmitll     area=1.75
B06        7          14         jmitll     area=1.69
B07        21         16         jmitll     area=1.85
B08        22         23         jmitll     area=1.63
B09        9          28         jmitll     area=1.69
B10        9          33         jmitll     area=2.17
B11        25         26         jmitll     area=2.18
IB01       0          42         pwl(0      0 5p 225u)
IB02       0          43         pwl(0      0 5p 225u)
IB03       0          18         pwl(0      0 5p 60u)
IB04       0          19         pwl(0      0 5p 60u)
IB05       0          41         pwl(0      0 5p 180u)
IB06       0          45         pwl(0      0 5p 160u)
L01        2          1          2.53p     
L02        4          3          2.1p      
L03        12         17         1.6p      
L04        6          5          2.53p     
L05        8          7          2.1p      
L06        14         15         1.6p      
L07        17         16         1.9p      
L08        15         16         1.9p      
L09        21         22         1.422p    
L10        22         28         3.07p     
L11        10         9          2.436p    
L12        22         24         4.047p    
L13        25         27         2.213p    
L14        1          4          1p        
L15        5          8          1p        
L16        24         25         1.047p    
LP01       0          31         0.13p     
LP02       0          32         0.146p    
LP03       0          29         0.127p    
LP04       0          30         0.138p    
LP05       0          23         0.307p    
LP06       0          33         0.159p    
LP07       0          26         0.153p    
LPR01      4          42         0.211p    
LPR02      8          43         0.211p    
LPR03      17         18         0.351p    
LPR04      15         19         0.361p    
LPR05      9          41         0.208p    
LPR06      24         45         0.361p    
LRB01      31         36         1p        
LRB02      32         35         1p        
LRB03      11         12         1p        
LRB04      29         37         1p        
LRB05      30         38         1p        
LRB06      13         14         1p        
LRB07      20         21         1p        
LRB08      23         39         1p        
LRB09      44         9          1p        
LRB10      33         34         1p        
LRB11      26         40         1p        
RB01       36         3          3.88      
RB02       35         1          5.54      
RB03       11         3          5.4       
RB04       37         7          3.88      
RB05       38         5          5.54      
RB06       13         7          5.4       
RB07       16         20         5.25      
RB08       39         22         6         
RB09       28         44         5.4       
RB10       34         9          4.45      
RB11       40         25         4.45      
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_xor
*******************************
*****************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 4 Nov 2016, CJ Fourie, SU     *
*   (Added B10, optimized)               *
******************************************
*$Parameters
*IT=870e-6
*$EndP
******************************************
*                 IN_A   IN_B OUT   CLK  
*$Ports          in_a  in_b  OUT    in_clk  
.SUBCKT mitll_or 260    280  900    120       
*==============  Begin SPICE netlist of main design ============
XPINA      PTLRX      260        26        
XPINB      PTLRX      280        28        
XPINCLK    PTLRX      120        12        
XPOUT      PTLTX      9          900       
B01        18         19         jmitll     area=2.5
B02        18         22         jmitll     area=2
B03        20         21         jmitll     area=2.5
B04        20         23         jmitll     area=2
B05        24         25         jmitll     area=3
B06        11         13         jmitll     area=2.6
B07        15         2          jmitll     area=2
B08        1          3          jmitll     area=2
B09        6          7          jmitll     area=2.5
B10        35         24         jmitll     area=3.25
IB01       0          29         pwl(0      0 5p 440u)
IB02       0          10         pwl(0      0 5p 110u)
IB03       0          16         pwl(0      0 5p 200u)
IB04       0          5          pwl(0      0 5p 120u)
L01        26         18         3p        
L02        22         27         1.9p      
L03        28         20         3p        
L04        23         27         1.9p      
L05        27         29         0.6p      
L06        29         35         2.1p      
L07        24         10         0.4p      
L08        10         2          7.362p    
L09        2          1          2.27p     
L10        16         15         1.43p     
L11        11         16         3.13p     
L12        12         11         2.5p      
L13        1          5          3.2p      
L14        5          6          1.1p      
L15        6          9          3.291p    
LP01       19         0          0.2p      
LP03       21         0          0.2p      
LP05       25         0          0.2p      
LP06       0          13         0.122p    
LP08       0          3          0.117p    
LP09       0          7          0.151p    
LRB01      31         19         1p        
LRB02      33         22         1p        
LRB03      30         21         1p        
LRB04      34         23         1p        
LRB05      32         25         1p        
LRB06      14         13         1p        
LRB07      17         2          1p        
LRB08      4          3          1p        
LRB09      8          7          1p        
LRB10      36         24         1p        
RB01       18         31         3.88      
RB02       18         33         4.85      
RB03       20         30         3.88      
RB04       20         34         4.85      
RB05       24         32         3.23      
RB06       14         11         3.73      
RB07       17         15         4.85      
RB08       4          1          4.85      
RB09       8          6          3.88      
RB10       35         36         2.98      
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_or
*******************************
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 5 Nov 2015, CJ Fourie, SU     *
* Modified 1 March 2016, JA Delport, SU  *
* Modified 23 Aug 2016, CJ Fourie, SU    *
* Last mod 16 Oct 2016, CJ Fourie, SU    *
*   (added DMP junction B2, optmized)    *
******************************************
*$Parameters
*IT=633e-6
*$EndP
******************************************
*                  Set    Out
*$Ports         in_set   out_out   clk
.SUBCKT mitll_dff  190   230     250 
XPINSET    PTLRX      190        19        
XPINRESET  PTLRX      250        25        
XPOUT      PTLTX      23         230       
B1         1          2          jjmitll100 area=2.5
B2         10         16         jjmitll100 area=2
B3         16         24         jjmitll100 area=2
B4         3          4          jjmitll100 area=2
B5         14         3          jjmitll100 area=1.5
B6         7          8          jjmitll100 area=2.5
B7         5          6          jjmitll100 area=2.5
IB1        0          20         pwl(0      0 5p 260uA)
IB2        0          21         pwl(0      0 5p 96uA)
IB3        0          22         pwl(0      0 5p 163uA)
IB4        0          7          pwl(0      0 5p 154uA)
L1         19         1          2p        
L2a        1          20         1p        
L2b        20         10         1.9p      
L3         16         21         1.5p      
L4         21         3          6p        
L5a        3          22         3p        
L5b        22         5          1p        
L6         5          23         2p        
L7         7          14         2.8p      
L8         25         7          2.2p      
Lp1        2          0          0.2p      
Lp3        24         0          0.2p      
Lp4        4          0          0.2p      
Lp6        8          0          0.2p      
Lp7        6          0          0.2p      
LRB1       12         2          1p        
LRB2       9          16         1p        
LRB3       15         24         1p        
LRB4       17         4          1p        
LRB5       13         3          1p        
LRB6       11         8          1p        
LRB7       18         6          1p        
RB1        1          12         3.88      
RB2        10         9          3.23      
RB3        16         15         4.85      
RB4        3          17         4.85      
RB5        14         13         6.46      
RB6        7          11         3.88      
RB7        5          18         3.88      
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_dff
*******************************
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 3 Nov 2015, CJ Fourie, SU     *
* Last mod 8 Nov 2016, CJ Fourie, SU     *
*   Added TimEx port descriptors         *
******************************************
*$Parameters
*IT=569e-6
*$EndP
******************************************
*                      in out1 out2
*$Ports                in_in  out_out1  out_out2
.SUBCKT mitll_splitter 700    100       110
XPINA      PTLRX      700        7         
XPOUT1     PTLTX      10         100       
XPOUT2     PTLTX      11         110       
B1         1          2          jjmitll100 area=3.25
B2         3          4          jjmitll100 area=2.5
B3         5          6          jjmitll100 area=2.5
*IB1        0          8          pwl(0      0 5p 569uA)
IB1        0          8          pwl(0      0 5p 669uA)
L1         7          1          1.4p      
L2         1          8          2p        
L3         8          9          0.4p      
L4         9          3          1.9p      
L5         3          10         2p        
L6         9          5          1.9p      
L7         5          11         2p        
Lp1        2          0          0.2p      
Lp2        4          0          0.2p      
Lp3        6          0          0.2p      
LRB1       12         2          1p        
LRB2       14         4          1p        
LRB3       13         6          1p        
RB1        1          12         2.98      
RB2        3          14         3.88      
RB3        5          13         3.88      
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_splitter
*******************************
*******************************
Xand2_31   gen_and    10064      10056      12 10218
Xand2_23   gen_and    10063      10053      13 10194
Xand2_32   gen_and    10104      10106      16 10216
Xand2_24   gen_and    10096      10097      17 10180
Xand2_41   gen_and    10046      10060      19 10214
Xand2_42   gen_and    10087      10052      23 10212
Xand2_34   gen_and    10110      10116      24 10238
Xand2_26   gen_and    10121      10039      25 10192
Xand2_18   gen_and    10061      10050      26 10190
Xand2_35   gen_and    10024      10042      28 10210
Xand2_27   gen_and    10112      10113      29 10213
Xand2_19   gen_and    10089      10049      30 10201
Xand2_44   gen_and    10055      10100      31 10208
Xand2_45   gen_and    10031      10070      34 10209
Xand2_38   gen_and    10047      10059      36 10188
Xand2_39   gen_and    10117      10099      37 10206
Xor2_46    mitll_or   10027      10073      91 10204
Xdff_50    mitll_dff  10058      68         10236
Xdff_51    mitll_dff  10068      71         10234
Xdff_60    mitll_dff  10034      73         10197
Xdff_52    mitll_dff  10041      74         10219
Xdff_61    mitll_dff  10018      76         10232
Xdff_53    mitll_dff  10020      77         10200
Xdff_70    mitll_dff  10102      78         10230
Xdff_62    mitll_dff  10076      79         10228
Xdff_54    mitll_dff  10084      80         10226
Xdff_47    mitll_dff  10040      62         10239
Xdff_71    mitll_dff  10101      81         10193
Xdff_63    mitll_dff  10079      82         10229
Xdff_55    mitll_dff  10080      83         10172
Xdff_48    mitll_dff  10051      65         10199
Xdff_72    mitll_dff  10115      84         10227
Xdff_56    mitll_dff  10083      85         10224
Xdff_57    mitll_dff  10036      66         10202
Xdff_49    mitll_dff  10048      67         10222
Xdff_73    mitll_dff  10044      87         10220
Xdff_65    mitll_dff  10009      86         10237
Xdff_58    mitll_dff  10015      69         10215
Xdff_59    mitll_dff  10054      70         10221
Xdff_68    mitll_dff  10038      72         10231
Xdff_69    mitll_dff  10123      75         10198
Xdff_64    mitll_dff  10082      92         10173
Xdff_66    mitll_dff  10086      93         10184
Xdff_67    mitll_dff  10035      94         10225
Xor2_20    mitll_or   10030      10062      8 10235
Xor2_40    mitll_or   10037      10066      15 10207
Xor2_33    mitll_or   10016      10074      20 10217
Xor2_25    mitll_or   10017      10067      21 10223
Xor2_43    mitll_or   10023      10069      27 10205
Xor2_36    mitll_or   10028      10077      32 10196
Xor2_28    mitll_or   10029      10109      33 10211
Xxor2a_37  mitll_xor  10032      10085      95 10182
Xsplit_100 mitll_splitter 10006      56         111
Xsplit_101 mitll_splitter 10007      59         114
Xxor2a_21  mitll_xor  10065      10098      9 10178
Xxor2a_30  mitll_xor  10103      10114      10 10203
Xxor2a_22  mitll_xor  10120      10111      11 10186
Xxor2a_15  mitll_xor  10118      10105      14 10195
Xxor2a_16  mitll_xor  10122      10107      18 10233
Xxor2a_17  mitll_xor  10119      10108      22 10174
Xxor2a_29  mitll_xor  10033      10071      35 10177
Xsplit_80  mitll_splitter 10011      43         101
Xsplit_81  mitll_splitter 10043      46         104
Xsplit_82  mitll_splitter 10013      48         106
Xsplit_90  mitll_splitter 10045      49         107
Xsplit_74  mitll_splitter 10014      88         121
Xsplit_83  mitll_splitter 10021      52         109
Xsplit_91  mitll_splitter 10075      51         110
Xsplit_75  mitll_splitter 10088      89         122
Xsplit_84  mitll_splitter 10025      55         112
Xsplit_92  mitll_splitter 10078      54         113
Xsplit_76  mitll_splitter 10022      90         123
Xsplit_77  mitll_splitter 10090      39         96
Xsplit_85  mitll_splitter 10010      57         115
Xsplit_93  mitll_splitter 10081      58         116
Xsplit_78  mitll_splitter 10026      40         97
Xsplit_86  mitll_splitter 10057      60         117
Xsplit_94  mitll_splitter 19999      61         118
Xsplit_79  mitll_splitter 10008      42         98
Xsplit_87  mitll_splitter 10012      41         99
Xsplit_95  mitll_splitter 10001      63         119
Xsplit_88  mitll_splitter 10019      44         100
Xsplit_96  mitll_splitter 10003      64         120
Xsplit_89  mitll_splitter 10072      45         102
Xsplit_97  mitll_splitter 10005      47         103
Xsplit_98  mitll_splitter 10002      50         105
Xsplit_99  mitll_splitter 10004      53         108
Xsplitclk_60 mitll_splitter 10162      238        239
Xsplitclk_61 mitll_splitter 10185      236        237
Xsplitclk_62 mitll_splitter 10179      234        235
Xsplitclk_63 mitll_splitter 10170      232        233
Xsplitclk_64 mitll_splitter 10158      230        231
Xsplitclk_65 mitll_splitter 10171      228        229
Xsplitclk_66 mitll_splitter 10161      226        227
Xsplitclk_67 mitll_splitter 10183      224        225
Xsplitclk_68 mitll_splitter 10181      222        223
Xsplitclk_69 mitll_splitter 10168      220        221
Xsplitclk_70 mitll_splitter 10187      218        219
Xsplitclk_71 mitll_splitter 10164      216        217
Xsplitclk_72 mitll_splitter 10160      214        215
Xsplitclk_73 mitll_splitter 10156      212        213
Xsplitclk_74 mitll_splitter 10176      210        211
Xsplitclk_75 mitll_splitter 10167      208        209
Xsplitclk_76 mitll_splitter 10165      206        207
Xsplitclk_77 mitll_splitter 10152      204        205
Xsplitclk_78 mitll_splitter 10189      202        203
Xsplitclk_79 mitll_splitter 10169      200        201
Xsplitclk_80 mitll_splitter 10191      198        199
Xsplitclk_81 mitll_splitter 10166      196        197
Xsplitclk_82 mitll_splitter 10175      194        195
Xsplitclk_83 mitll_splitter 10142      192        193
Xsplitclk_84 mitll_splitter 10148      190        191
Xsplitclk_85 mitll_splitter 10146      188        189
Xsplitclk_86 mitll_splitter 10150      186        187
Xsplitclk_87 mitll_splitter 10140      184        185
Xsplitclk_88 mitll_splitter 10153      182        183
Xsplitclk_89 mitll_splitter 10149      180        181
Xsplitclk_90 mitll_splitter 10163      178        179
Xsplitclk_91 mitll_splitter 10157      176        177
Xsplitclk_92 mitll_splitter 10151      174        175
Xsplitclk_93 mitll_splitter 10159      172        173
Xsplitclk_94 mitll_splitter 10144      170        171
Xsplitclk_95 mitll_splitter 10154      168        169
Xsplitclk_96 mitll_splitter 10155      166        167
Xsplitclk_97 mitll_splitter 10143      164        165
Xsplitclk_98 mitll_splitter 10141      162        163
Xsplitclk_99 mitll_splitter 10147      160        161
Xsplitclk_100 mitll_splitter 10145      158        159
Xsplitclk_101 mitll_splitter 10134      156        157
Xsplitclk_102 mitll_splitter 10136      154        155
Xsplitclk_103 mitll_splitter 10132      152        153
Xsplitclk_104 mitll_splitter 10139      150        151
Xsplitclk_105 mitll_splitter 10138      148        149
Xsplitclk_106 mitll_splitter 10131      146        147
Xsplitclk_107 mitll_splitter 10133      144        145
Xsplitclk_108 mitll_splitter 10137      142        143
Xsplitclk_109 mitll_splitter 10135      140        141
Xsplitclk_110 mitll_splitter 10130      138        139
Xsplitclk_111 mitll_splitter 10129      136        137
Xsplitclk_112 mitll_splitter 10128      134        135
Xsplitclk_113 mitll_splitter 10126      132        133
Xsplitclk_114 mitll_splitter 10124      130        131
Xsplitclk_115 mitll_splitter 10127      128        129
Xsplitclk_116 mitll_splitter 10125      126        127
Xsplitclk_117 mitll_splitter 10240      124        125
Tnet0      2200       0          19999      0 LOSSLESS Z0=5 TD=6.1p
Tnet1      2201       0          10001      0 LOSSLESS Z0=5 TD=5.3p
Tnet2      3200       0          10002      0 LOSSLESS Z0=5 TD=9.1p
Tnet3      2202       0          10003      0 LOSSLESS Z0=5 TD=7.1p
Tnet4      3201       0          10004      0 LOSSLESS Z0=5 TD=8.2p
Tnet5      2203       0          10005      0 LOSSLESS Z0=5 TD=7.2p
Tnet6      3202       0          10006      0 LOSSLESS Z0=5 TD=8p
Tnet7      3203       0          10007      0 LOSSLESS Z0=5 TD=6.7p
Tnet8      8          0          10008      0 LOSSLESS Z0=5 TD=1.8p
Tnet9      9          0          10009      0 LOSSLESS Z0=5 TD=1.6p
Tnet10     10         0          10010      0 LOSSLESS Z0=5 TD=1.7p
Tnet11     11         0          10011      0 LOSSLESS Z0=5 TD=1.1p
Tnet12     12         0          10012      0 LOSSLESS Z0=5 TD=1.7p
Tnet13     13         0          10013      0 LOSSLESS Z0=5 TD=2.4p
Tnet14     14         0          10014      0 LOSSLESS Z0=5 TD=4.4p
Tnet15     15         0          10015      0 LOSSLESS Z0=5 TD=1.6p
Tnet16     16         0          10016      0 LOSSLESS Z0=5 TD=1.1p
Tnet17     17         0          10017      0 LOSSLESS Z0=5 TD=1.6p
Tnet18     18         0          10018      0 LOSSLESS Z0=5 TD=0.91p
Tnet19     19         0          10019      0 LOSSLESS Z0=5 TD=3.5p
Tnet20     20         0          10020      0 LOSSLESS Z0=5 TD=2.3p
Tnet21     21         0          10021      0 LOSSLESS Z0=5 TD=4.8p
Tnet22     22         0          10022      0 LOSSLESS Z0=5 TD=1.1p
Tnet23     23         0          10023      0 LOSSLESS Z0=5 TD=4p
Tnet24     24         0          10024      0 LOSSLESS Z0=5 TD=5.2p
Tnet25     25         0          10025      0 LOSSLESS Z0=5 TD=3.6p
Tnet26     26         0          10026      0 LOSSLESS Z0=5 TD=3.5p
Tnet27     27         0          10027      0 LOSSLESS Z0=5 TD=1.1p
Tnet28     28         0          10028      0 LOSSLESS Z0=5 TD=4.8p
Tnet29     29         0          10029      0 LOSSLESS Z0=5 TD=2.2p
Tnet30     30         0          10030      0 LOSSLESS Z0=5 TD=4.6p
Tnet31     31         0          10031      0 LOSSLESS Z0=5 TD=1.1p
Tnet32     32         0          10032      0 LOSSLESS Z0=5 TD=2.5p
Tnet33     33         0          10033      0 LOSSLESS Z0=5 TD=2.2p
Tnet34     34         0          10034      0 LOSSLESS Z0=5 TD=0.46p
Tnet35     35         0          10035      0 LOSSLESS Z0=5 TD=8p
Tnet36     36         0          10036      0 LOSSLESS Z0=5 TD=1.7p
Tnet37     37         0          10037      0 LOSSLESS Z0=5 TD=1.1p
Tnet38     1201       0          10038      0 LOSSLESS Z0=5 TD=9.5p
Tnet39     39         0          10039      0 LOSSLESS Z0=5 TD=0.73p
Tnet40     40         0          10040      0 LOSSLESS Z0=5 TD=0.55p
Tnet41     41         0          10041      0 LOSSLESS Z0=5 TD=0.64p
Tnet42     42         0          10042      0 LOSSLESS Z0=5 TD=1.3p
Tnet43     43         0          10043      0 LOSSLESS Z0=5 TD=1.2p
Tnet44     44         0          10044      0 LOSSLESS Z0=5 TD=4.1p
Tnet45     45         0          10045      0 LOSSLESS Z0=5 TD=2.5p
Tnet46     46         0          10046      0 LOSSLESS Z0=5 TD=1.7p
Tnet47     47         0          10047      0 LOSSLESS Z0=5 TD=1.4p
Tnet48     48         0          10048      0 LOSSLESS Z0=5 TD=1.6p
Tnet49     49         0          10049      0 LOSSLESS Z0=5 TD=3.5p
Tnet50     50         0          10050      0 LOSSLESS Z0=5 TD=3.6p
Tnet51     51         0          10051      0 LOSSLESS Z0=5 TD=0.55p
Tnet52     52         0          10052      0 LOSSLESS Z0=5 TD=0.55p
Tnet53     53         0          10053      0 LOSSLESS Z0=5 TD=1.6p
Tnet54     54         0          10054      0 LOSSLESS Z0=5 TD=2.1p
Tnet55     55         0          10055      0 LOSSLESS Z0=5 TD=3p
Tnet56     56         0          10056      0 LOSSLESS Z0=5 TD=2.5p
Tnet57     57         0          10057      0 LOSSLESS Z0=5 TD=2.4p
Tnet58     58         0          10058      0 LOSSLESS Z0=5 TD=0.55p
Tnet59     59         0          10059      0 LOSSLESS Z0=5 TD=0.91p
Tnet60     60         0          10060      0 LOSSLESS Z0=5 TD=0.73p
Tnet61     61         0          10061      0 LOSSLESS Z0=5 TD=1.4p
* NET 62: 2.5 ps. Lifted to 4.5 ps to get simulation working
Tnet62     62         0          10062      0 LOSSLESS Z0=5 TD=2.5p
Tnet63     63         0          10063      0 LOSSLESS Z0=5 TD=0.82p
Tnet64     64         0          10064      0 LOSSLESS Z0=5 TD=1.2p
Tnet65     65         0          10065      0 LOSSLESS Z0=5 TD=3p
Tnet66     66         0          10066      0 LOSSLESS Z0=5 TD=4.5p
Tnet67     67         0          10067      0 LOSSLESS Z0=5 TD=0.46p
Tnet68     68         0          10068      0 LOSSLESS Z0=5 TD=2.5p
Tnet69     69         0          10069      0 LOSSLESS Z0=5 TD=3.8p
Tnet70     70         0          10070      0 LOSSLESS Z0=5 TD=3.6p
Tnet71     71         0          10071      0 LOSSLESS Z0=5 TD=1.4p
Tnet72     72         0          10072      0 LOSSLESS Z0=5 TD=1.7p
Tnet73     73         0          10073      0 LOSSLESS Z0=5 TD=2.9p
Tnet74     74         0          10074      0 LOSSLESS Z0=5 TD=2.7p
Tnet75     75         0          10075      0 LOSSLESS Z0=5 TD=1.1p
Tnet76     76         0          10076      0 LOSSLESS Z0=5 TD=1p
Tnet77     77         0          10077      0 LOSSLESS Z0=5 TD=3.7p
Tnet78     78         0          10078      0 LOSSLESS Z0=5 TD=4.7p
Tnet79     79         0          10079      0 LOSSLESS Z0=5 TD=1p
* NET 80: 1.7 ps.  Lifted to 4.7 ps to get simulation working
Tnet80     80         0          10080      0 LOSSLESS Z0=5 TD=1.7p
Tnet81     81         0          10081      0 LOSSLESS Z0=5 TD=4.5p
Tnet82     82         0          10082      0 LOSSLESS Z0=5 TD=2p
Tnet83     83         0          10083      0 LOSSLESS Z0=5 TD=3.1p
Tnet84     84         0          10084      0 LOSSLESS Z0=5 TD=1p
Tnet85     85         0          10085      0 LOSSLESS Z0=5 TD=0.46p
Tnet86     86         0          10086      0 LOSSLESS Z0=5 TD=0.46p
Tnet87     87         0          10087      0 LOSSLESS Z0=5 TD=2.5p
Tnet88     88         0          10088      0 LOSSLESS Z0=5 TD=1.8p
Tnet89     89         0          10089      0 LOSSLESS Z0=5 TD=1.2p
Tnet90     90         0          10090      0 LOSSLESS Z0=5 TD=3.5p
Tnet91     91         0          1002       0 LOSSLESS Z0=5 TD=5.1p
Tnet92     92         0          4000       0 LOSSLESS Z0=5 TD=7.5p
Tnet93     93         0          4001       0 LOSSLESS Z0=5 TD=14p
Tnet94     94         0          4002       0 LOSSLESS Z0=5 TD=8.7p
Tnet95     95         0          4003       0 LOSSLESS Z0=5 TD=9.2p
Tnet96     96         0          10096      0 LOSSLESS Z0=5 TD=3p
Tnet97     97         0          10097      0 LOSSLESS Z0=5 TD=1.6p
Tnet98     98         0          10098      0 LOSSLESS Z0=5 TD=3.3p
Tnet99     99         0          10099      0 LOSSLESS Z0=5 TD=0.46p
Tnet100    100        0          10100      0 LOSSLESS Z0=5 TD=0.46p
Tnet101    101        0          10101      0 LOSSLESS Z0=5 TD=4p
Tnet102    102        0          10102      0 LOSSLESS Z0=5 TD=0.91p
Tnet103    103        0          10103      0 LOSSLESS Z0=5 TD=1.5p
Tnet104    104        0          10104      0 LOSSLESS Z0=5 TD=4p
Tnet105    105        0          10105      0 LOSSLESS Z0=5 TD=0.46p
Tnet106    106        0          10106      0 LOSSLESS Z0=5 TD=0.46p
Tnet107    107        0          10107      0 LOSSLESS Z0=5 TD=1.2p
Tnet108    108        0          10108      0 LOSSLESS Z0=5 TD=3.4p
Tnet109    109        0          10109      0 LOSSLESS Z0=5 TD=2.8p
Tnet110    110        0          10110      0 LOSSLESS Z0=5 TD=2.9p
Tnet111    111        0          10111      0 LOSSLESS Z0=5 TD=1p
Tnet112    112        0          10112      0 LOSSLESS Z0=5 TD=2.4p
Tnet113    113        0          10113      0 LOSSLESS Z0=5 TD=3.3p
Tnet114    114        0          10114      0 LOSSLESS Z0=5 TD=0.46p
Tnet115    115        0          10115      0 LOSSLESS Z0=5 TD=1.3p
Tnet116    116        0          10116      0 LOSSLESS Z0=5 TD=1.7p
Tnet117    117        0          10117      0 LOSSLESS Z0=5 TD=2.1p
Tnet118    118        0          10118      0 LOSSLESS Z0=5 TD=2.7p
Tnet119    119        0          10119      0 LOSSLESS Z0=5 TD=1.1p
Tnet120    120        0          10120      0 LOSSLESS Z0=5 TD=1.3p
Tnet121    121        0          10121      0 LOSSLESS Z0=5 TD=1.5p
Tnet122    122        0          10122      0 LOSSLESS Z0=5 TD=2.5p
Tnet123    123        0          10123      0 LOSSLESS Z0=5 TD=1.5p
Tnet124    124        0          10124      0 LOSSLESS Z0=5 TD=4.2p
Tnet125    125        0          10125      0 LOSSLESS Z0=5 TD=1.3p
Tnet126    126        0          10126      0 LOSSLESS Z0=5 TD=3.2p
Tnet127    127        0          10127      0 LOSSLESS Z0=5 TD=1.8p
Tnet128    128        0          10128      0 LOSSLESS Z0=5 TD=1.7p
Tnet129    129        0          10129      0 LOSSLESS Z0=5 TD=2.3p
Tnet130    130        0          10130      0 LOSSLESS Z0=5 TD=2.6p
Tnet131    131        0          10131      0 LOSSLESS Z0=5 TD=3.3p
Tnet132    132        0          10132      0 LOSSLESS Z0=5 TD=2.8p
Tnet133    133        0          10133      0 LOSSLESS Z0=5 TD=1.7p
Tnet134    134        0          10134      0 LOSSLESS Z0=5 TD=2.3p
Tnet135    135        0          10135      0 LOSSLESS Z0=5 TD=0.68p
Tnet136    136        0          10136      0 LOSSLESS Z0=5 TD=2.2p
Tnet137    137        0          10137      0 LOSSLESS Z0=5 TD=2.1p
Tnet138    138        0          10138      0 LOSSLESS Z0=5 TD=1.9p
Tnet139    139        0          10139      0 LOSSLESS Z0=5 TD=2.3p
Tnet140    140        0          10140      0 LOSSLESS Z0=5 TD=1.2p
Tnet141    141        0          10141      0 LOSSLESS Z0=5 TD=2.4p
Tnet142    142        0          10142      0 LOSSLESS Z0=5 TD=0.46p
Tnet143    143        0          10143      0 LOSSLESS Z0=5 TD=0.82p
Tnet144    144        0          10144      0 LOSSLESS Z0=5 TD=1.7p
Tnet145    145        0          10145      0 LOSSLESS Z0=5 TD=0.68p
Tnet146    146        0          10146      0 LOSSLESS Z0=5 TD=1.2p
Tnet147    147        0          10147      0 LOSSLESS Z0=5 TD=1.9p
Tnet148    148        0          10148      0 LOSSLESS Z0=5 TD=1.7p
Tnet149    149        0          10149      0 LOSSLESS Z0=5 TD=1.3p
Tnet150    150        0          10150      0 LOSSLESS Z0=5 TD=1.5p
Tnet151    151        0          10151      0 LOSSLESS Z0=5 TD=2p
Tnet152    152        0          10152      0 LOSSLESS Z0=5 TD=2.4p
Tnet153    153        0          10153      0 LOSSLESS Z0=5 TD=0.91p
Tnet154    154        0          10154      0 LOSSLESS Z0=5 TD=2p
Tnet155    155        0          10155      0 LOSSLESS Z0=5 TD=0.99p
Tnet156    156        0          10156      0 LOSSLESS Z0=5 TD=0.82p
Tnet157    157        0          10157      0 LOSSLESS Z0=5 TD=1.6p
Tnet158    158        0          10158      0 LOSSLESS Z0=5 TD=0.91p
Tnet159    159        0          10159      0 LOSSLESS Z0=5 TD=1p
Tnet160    160        0          10160      0 LOSSLESS Z0=5 TD=2p
Tnet161    161        0          10161      0 LOSSLESS Z0=5 TD=0.91p
Tnet162    162        0          10162      0 LOSSLESS Z0=5 TD=1.4p
Tnet163    163        0          10163      0 LOSSLESS Z0=5 TD=0.74p
Tnet164    164        0          10164      0 LOSSLESS Z0=5 TD=2.7p
Tnet165    165        0          10165      0 LOSSLESS Z0=5 TD=1p
Tnet166    166        0          10166      0 LOSSLESS Z0=5 TD=1.5p
Tnet167    167        0          10167      0 LOSSLESS Z0=5 TD=1.4p
Tnet168    168        0          10168      0 LOSSLESS Z0=5 TD=0.76p
Tnet169    169        0          10169      0 LOSSLESS Z0=5 TD=1.5p
Tnet170    170        0          10170      0 LOSSLESS Z0=5 TD=0.5p
Tnet171    171        0          10171      0 LOSSLESS Z0=5 TD=1p
Tnet172    172        0          10172      0 LOSSLESS Z0=5 TD=0.41p
Tnet173    173        0          10173      0 LOSSLESS Z0=5 TD=0.77p
Tnet174    174        0          10174      0 LOSSLESS Z0=5 TD=1.5p
Tnet175    175        0          10175      0 LOSSLESS Z0=5 TD=0.64p
Tnet176    176        0          10176      0 LOSSLESS Z0=5 TD=0.36p
Tnet177    177        0          10177      0 LOSSLESS Z0=5 TD=1.6p
Tnet178    178        0          10178      0 LOSSLESS Z0=5 TD=1.3p
Tnet179    179        0          10179      0 LOSSLESS Z0=5 TD=0.62p
Tnet180    180        0          10180      0 LOSSLESS Z0=5 TD=0.59p
Tnet181    181        0          10181      0 LOSSLESS Z0=5 TD=0.91p
Tnet182    182        0          10182      0 LOSSLESS Z0=5 TD=0.5p
Tnet183    183        0          10183      0 LOSSLESS Z0=5 TD=0.91p
Tnet184    184        0          10184      0 LOSSLESS Z0=5 TD=0.5p
Tnet185    185        0          10185      0 LOSSLESS Z0=5 TD=0.91p
Tnet186    186        0          10186      0 LOSSLESS Z0=5 TD=0.27p
Tnet187    187        0          10187      0 LOSSLESS Z0=5 TD=1.5p
Tnet188    188        0          10188      0 LOSSLESS Z0=5 TD=1.6p
Tnet189    189        0          10189      0 LOSSLESS Z0=5 TD=0.55p
Tnet190    190        0          10190      0 LOSSLESS Z0=5 TD=1.8p
Tnet191    191        0          10191      0 LOSSLESS Z0=5 TD=0.53p
Tnet192    192        0          10192      0 LOSSLESS Z0=5 TD=1.8p
Tnet193    193        0          10193      0 LOSSLESS Z0=5 TD=1p
Tnet194    194        0          10194      0 LOSSLESS Z0=5 TD=1.5p
Tnet195    195        0          10195      0 LOSSLESS Z0=5 TD=0.71p
Tnet196    196        0          10196      0 LOSSLESS Z0=5 TD=0.36p
Tnet197    197        0          10197      0 LOSSLESS Z0=5 TD=1.4p
Tnet198    198        0          10198      0 LOSSLESS Z0=5 TD=1.1p
Tnet199    199        0          10199      0 LOSSLESS Z0=5 TD=0.86p
Tnet200    200        0          10200      0 LOSSLESS Z0=5 TD=1.4p
Tnet201    201        0          10201      0 LOSSLESS Z0=5 TD=0.55p
Tnet202    202        0          10202      0 LOSSLESS Z0=5 TD=0.46p
Tnet203    203        0          10203      0 LOSSLESS Z0=5 TD=0.82p
Tnet204    204        0          10204      0 LOSSLESS Z0=5 TD=0.46p
Tnet205    205        0          10205      0 LOSSLESS Z0=5 TD=0.82p
Tnet206    206        0          10206      0 LOSSLESS Z0=5 TD=0.64p
Tnet207    207        0          10207      0 LOSSLESS Z0=5 TD=0.64p
Tnet208    208        0          10208      0 LOSSLESS Z0=5 TD=0.64p
Tnet209    209        0          10209      0 LOSSLESS Z0=5 TD=0.64p
Tnet210    210        0          10210      0 LOSSLESS Z0=5 TD=0.46p
Tnet211    211        0          10211      0 LOSSLESS Z0=5 TD=0.82p
Tnet212    212        0          10212      0 LOSSLESS Z0=5 TD=0.64p
Tnet213    213        0          10213      0 LOSSLESS Z0=5 TD=0.64p
Tnet214    214        0          10214      0 LOSSLESS Z0=5 TD=0.82p
Tnet215    215        0          10215      0 LOSSLESS Z0=5 TD=0.64p
Tnet216    216        0          10216      0 LOSSLESS Z0=5 TD=0.64p
Tnet217    217        0          10217      0 LOSSLESS Z0=5 TD=0.64p
Tnet218    218        0          10218      0 LOSSLESS Z0=5 TD=0.82p
Tnet219    219        0          10219      0 LOSSLESS Z0=5 TD=0.64p
Tnet220    220        0          10220      0 LOSSLESS Z0=5 TD=0.68p
Tnet221    221        0          10221      0 LOSSLESS Z0=5 TD=0.59p
Tnet222    222        0          10222      0 LOSSLESS Z0=5 TD=0.68p
Tnet223    223        0          10223      0 LOSSLESS Z0=5 TD=0.59p
Tnet224    224        0          10224      0 LOSSLESS Z0=5 TD=0.41p
Tnet225    225        0          10225      0 LOSSLESS Z0=5 TD=0.77p
Tnet226    226        0          10226      0 LOSSLESS Z0=5 TD=0.68p
Tnet227    227        0          10227      0 LOSSLESS Z0=5 TD=0.59p
Tnet228    228        0          10228      0 LOSSLESS Z0=5 TD=0.41p
Tnet229    229        0          10229      0 LOSSLESS Z0=5 TD=0.77p
Tnet230    230        0          10230      0 LOSSLESS Z0=5 TD=0.41p
Tnet231    231        0          10231      0 LOSSLESS Z0=5 TD=0.77p
Tnet232    232        0          10232      0 LOSSLESS Z0=5 TD=0.68p
Tnet233    233        0          10233      0 LOSSLESS Z0=5 TD=0.59p
Tnet234    234        0          10234      0 LOSSLESS Z0=5 TD=0.91p
Tnet235    235        0          10235      0 LOSSLESS Z0=5 TD=0.64p
Tnet236    236        0          10236      0 LOSSLESS Z0=5 TD=0.68p
Tnet237    237        0          10237      0 LOSSLESS Z0=5 TD=0.59p
Tnet238    238        0          10238      0 LOSSLESS Z0=5 TD=0.41p
Tnet239    239        0          10239      0 LOSSLESS Z0=5 TD=0.77p
Tnet240    1200       0          10240      0 LOSSLESS Z0=5 TD=14p
*---------------------------------------------*
Iclk       0          1000       pulse(0    600u 50p 10p 9p 1p 51p)
ICin       0          1001       pwl(0      0 30p 0 )
IA0        0          2000       pwl(0      0 30p 0 35p 600u 40p 0)
IA1        0          2001       pwl(0      0 30p 0 35p 600u 40p 0)
IA2        0          2002       pwl(0      0 30p 0 35p 600u 40p 0)
IA3        0          2003       pwl(0      0 30p 0 35p 600u 40p 0)
IB0        0          3000       pwl(0      0 30p 0 35p 600u 40p 0)
IB1        0          3001       pwl(0      0 30p 0 35p 600u 40p 0)
IB2        0          3002       pwl(0      0 30p 0 35p 600u 40p 0)
IB3        0          3003       pwl(0      0 30p 0 35p 600u 40p 0)
XDCSFQclk  mitll_dcsfq 1000       1100      
XJTLclk    JTLTOUT    1100       1200      
XDCSFQcin  mitll_dcsfq 1001       1101      
XJTLcin    JTLTOUT    1101       1201      
XDCSFQA0   mitll_dcsfq 2000       2100      
XJTLA0     JTLTOUT    2100       2200      
XDCSFQA1   mitll_dcsfq 2001       2101      
XJTLA1     JTLTOUT    2101       2201      
XDCSFQA2   mitll_dcsfq 2002       2102      
XJTLA2     JTLTOUT    2102       2202      
XDCSFQA3   mitll_dcsfq 2003       2103      
XJTLA3     JTLTOUT    2103       2203      
XDCSFQB0   mitll_dcsfq 3000       3100      
XJTLB0     JTLTOUT    3100       3200      
XDCSFQB1   mitll_dcsfq 3001       3101      
XJTLB1     JTLTOUT    3101       3201      
XDCSFQB2   mitll_dcsfq 3002       3102      
XJTLB2     JTLTOUT    3102       3202      
XDCSFQB3   mitll_dcsfq 3003       3103      
XJTLB3     JTLTOUT    3103       3203      
RSUM0      4000       0          5         
RSUM1      4001       0          5         
RSUM2      4002       0          5         
RSUM3      4003       0          5         
RCOUT      1002       0          5         
.tran 0.5p 1500p 0 0.25p
*.tran 0.5p 520p 420p 0.25p
.print NODEV 1200 0
.print NODEV 2200 0
.print NODEV 2201 0
.print NODEV 2202 0
.print NODEV 2203 0
.print NODEV 3200 0
.print NODEV 3201 0
.print NODEV 3202 0
.print NODEV 3203 0
.print NODEV 4000 0
.print NODEV 4001 0
.print NODEV 4002 0
.print NODEV 4003 0
.print NODEV 1002 0
*.print NODEV 10184 0
*.print NODEV 4000 0
*.print NODEV 4001 0
*.print NODEV 4002 0
*.print NODEV 4003 0
*.print NODEV 2200 0
*.print NODEV 2201 0
*.print NODEV 2202 0
*.print NODEV 2203 0
*.print NODEV 3200 0
*.print NODEV 3201 0
*.print NODEV 3202 0
*.print NODEV 3203 0
*.print NODEV 10108 0
*.print NODEV 10119 0
*.print NODEV 10174 0
*.print NODEV 22 0
*.print NODEV 10123 0
*.print NODEV 10198 0
*.print NODEV 75 0
*.print NODEV 10051 0
*.print NODEV 10199 0
*.print NODEV 65 0
*.print NODEV 10098 0
*.print NODEV 9 0
*.print NODEV 10040 0
*.print NODEV 10239 0
*.print NODEV 62 0
*.print NODEV 10030 0
*.print NODEV 10062 0
*.print NODEV 10235 0
*.print NODEV 8 0
*.print NODEV 10115 0
*.print NODEV 10084 0
*.print NODEV 10080 0
*.print NODEV 10083 0
*.print NODEV 10085 0
*.print NODEV 10084 0
*.print NODEV 10226 0
*.print NODEV 80 0
*.print NODEV 10080 0
*.print NODEV 10172 0
*.print NODEV 83 0
*.print NODEV 10159 0
*.print NODEV 172 0
*.print NODEV 173 0
.end
