{
    "targets": [
        {
            "target_name": "HelloWorld",
            "sources": [ "main.cc", "functions.cc" ],
            "include_dirs" : [
              "<!(node -e \"require('nan')\")"
            ]
        }
    ],
}
