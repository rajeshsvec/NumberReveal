import java.util.Scanner;
class ImagineNumber{
    static Scanner sc = new Scanner(System.in);
    // Developed by Rajesh 
    //contact : rajeshsvec75@gmail.com
    public static void print(int array[])
    {
        System.out.println("Group one:");
        for(int i=0;i<array.length;i++)
        {
            
            if(i==7)
            {
                System.out.println("Group Two:");
            }
            if(i==14)
            {
                System.out.println("Group Three:");
            }
            System.out.print(array[i]+"    ");
            if(i==6 || i==13)
            {
                System.out.println();
            }
        }
        System.out.println();
    }
    
    public static int[] performEdits(int array[])
    {
        int temp[]=new int[array.length];
        System.out.print("Please enter the group number in which your IMAGINED NUMBER is present : ");
        int choice = sc.nextInt();
        if(choice==1)
        {
            temp[0]=array[7];
            temp[7]=array[8];
            temp[14]=array[9];
            temp[1]=array[10];
            temp[8]=array[11];
            temp[15]=array[12];
            temp[2]=array[13];
            temp[9]=array[0];
            temp[16]=array[1];
            temp[3]=array[2];
            temp[10]=array[3];
            temp[17]=array[4];
            temp[4]=array[5];
            temp[11]=array[6];
            temp[18]=array[14];
            temp[5]=array[15];
            temp[12]=array[16];
            temp[19]=array[17];
            temp[6]=array[18];
            temp[13]=array[19];
            temp[20]=array[20]; 
        }
        else if(choice==2)
        {
            temp[0]=array[0];
            temp[7]=array[1];
            temp[14]=array[2];
            temp[1]=array[3];
            temp[8]=array[4];
            temp[15]=array[5];
            temp[2]=array[6];
            temp[9]=array[7];
            temp[16]=array[8];
            temp[3]=array[9];
            temp[10]=array[10];
            temp[17]=array[11];
            temp[4]=array[12];
            temp[11]=array[13];
            temp[18]=array[14];
            temp[5]=array[15];
            temp[12]=array[16];
            temp[19]=array[17];
            temp[6]=array[18];
            temp[13]=array[19];
            temp[20]=array[20]; 
        }
        else{
            temp[0]=array[7];
            temp[7]=array[8];
            temp[14]=array[9];
            temp[1]=array[10];
            temp[8]=array[11];
            temp[15]=array[12];
            temp[2]=array[13];
            temp[9]=array[14];
            temp[16]=array[15];
            temp[3]=array[16];
            temp[10]=array[17];
            temp[17]=array[18];
            temp[4]=array[19];
            temp[11]=array[20];
            temp[18]=array[0];
            temp[5]=array[1];
            temp[12]=array[2];
            temp[19]=array[3];
            temp[6]=array[4];
            temp[13]=array[5];
            temp[20]=array[6]; 
        }
        return temp;

    }
public static void main(String[] args) {
    System.out.println();
    System.out.println("        HELLO   MATH    WIZARD");
    System.out.println();
    System.out.println("Imagine a number of range 1-21 in your mind");
    System.out.println();
    int array[]={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21};
    print(array);
    array = performEdits(array);
    print(array);
    array = performEdits(array);
    print(array);
    array = performEdits(array);
    System.out.println("The number you IMAGINED is : ");
    System.out.print("              "+array[10]);
}
}