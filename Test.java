class Test{
	 public static void main(String[] args) {

        //System.out.println(drawTriangle("*", 7));
        
    
int userInput = 50;//3
int minus = userInput -1;//2
int lineNumber = userInput + minus;//5
int half = (lineNumber / 2) + 1;//3

for(int i = 1; i <= half; i++){
    System.out.println("");
    for (int j = 1; j <= i; j++){
        System.out.print("*");
    }
}
for (int i = minus; i >= 1; i--){
    System.out.println("");
    for (int j = 1; j <= i; j++){
        System.out.print("*");
    }
}

    }// main

    // Assume equilateral triangle
    public static String drawTriangle(String symbol, int side) {
        StringBuilder sb = new StringBuilder();

        int i = 0;

        //Top line
        for(i = 1; i < side; i++){sb.append(" ");}
        sb.append(symbol);
        sb.append("\n");

        for(i = 1; i < side-1; i++){
            for(int j = 1; j < side-i; j++){sb.append(" ");}
            sb.append(symbol);

            for(int k = 1; k <= (i * 2)- 1 ; k++){sb.append(" ");}
            sb.append(symbol);
            sb.append("\n");

        }

        //Bottom line
        for(i = 0; i < side; i++){sb.append(symbol + " ");}

        return sb.toString();

    }
}