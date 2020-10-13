public int getGCD(int a, int b) {
   
   }
   
   public int getGCD(int[] a) {
     
     int gcd = a[0];
   
    
     for( int i=1; i<a.length; i++ ) {
       gcd = getGCD( gcd, a[i] );
     }
   
     // return result
     return gcd;    
   }
