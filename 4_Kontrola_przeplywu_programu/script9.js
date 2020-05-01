function printFirstPart(size) {
    var line = "";

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size; j++) {
            if (i >= j)
                line = line + "*";
            else
                line = line + (j + 1);
        }

        line = line + "\n";
    }

    console.log(line);
}

function printSecondPart(size)
{
    var line = "";

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < size; j++) {
            line += "*"
        }

        line = line + "\n";
    }

    console.log(line);
}


function printThirdPart(size) {
    var line = "";

    for (var i = size; i > 1; i--) {
        for (var j = 1; j <= size; j++) {
            if (j >= i)
                line = line + j;
            else
                line = line + "*";
        }

        line = line + "\n";
    }

    console.log(line);
}

function printSquare(size)
{
    printFirstPart(size);
    printSecondPart(size);
    printThirdPart(size);
}

printSquare(5);