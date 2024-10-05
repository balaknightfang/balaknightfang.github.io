import os

directory = "C:\\Users\\Robert\\Documents\\GitHub\\balaknightfang.github.io\\Projects\\CoC2Sorter\\img"

for file in os.listdir(directory):
    filename = os.fsdecode(file)
    filenameParts = filename.split(".")
    newName = filenameParts[0] + "." + filenameParts[-1];
    os.rename(filename, newName)