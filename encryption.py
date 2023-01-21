from random import *


def Encoding(word, key):
    print("\nEncoding is in processing....")
    cypher1 = ""
    for alphabet in word:
        # if((ord(alphabet)+key)<127):
        alphabet = chr(ord(alphabet) + key)
        # else:
        # alphabet = alphabet
        cypher1 = cypher1 + alphabet
    starting_letter_e = cypher1[0]
    cypher2 = cypher1[1:]
    cyphertext = chr(65 + randint(0, 52)) + chr(65 + randint(0, 52)) + chr(
        65 + randint(0, 52)) + cypher2 + starting_letter_e + chr(65 + randint(
            0, 52)) + chr(65 + randint(0, 52)) + chr(65 + randint(0, 52))

    print(f"\nSecret code(Encoding) of your original text is => {cyphertext} ")

    # print(randint(1, 26))


def Decoding(cyphertext, key):
    print("\nDecoding is in processing....")
    plaintext = ""
    starting_letter_d = cyphertext[-4]
    plain1 = cyphertext[3:-4]
    # print(f"Plain1 = {plain1}")
    plain1 = starting_letter_d + plain1
    # print(f"Plain1 = {plain1}")
    for alphabet in plain1:
        # if(ord(alphabet)-key<127):
        alphabet = chr(ord(alphabet) - key)
        # else:
        # alphabet = alphabet
        plaintext = plaintext + alphabet
    print(f"\nOriginal text after Decoding is  => {plaintext}")


while True:
    word = input("\nEnter text you want to Encode or Decode : ")
    choice = int(
        input("Enter your choice (1 for Encoding or 2 for Decoding) : "))
    print("Encoding key Must Equal to Decoding Key for Exact Result..")
    key = int(input("Enter your secret key (1-4) : "))
    if key < 1 or key > 4:
        raise ValueError("You Entered wrong value for Key !!!")

    if (choice == 1):
        Encoding(word, key)
    elif (choice == 2):
        Decoding(word, key)
    else:
        raise ValueError("You Entered wrong value for choice !!!")

    flag = int(
        input(
            "\nYou want more Encoding or Decoding , (1 for Yes, 2 for No) : "))
    if (flag == 2):
        break
    if (flag != 1 and flag != 2):
        raise ValueError(
            "You Entered wrong value for Selecting want more or not !!!")
