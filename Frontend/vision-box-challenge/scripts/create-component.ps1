param(
    [string]$name
)

$Path = "../src/Components/"

New-Item -Path $Path -Name $name -ItemType Directory
New-Item -Path "$Path/$name/" -Name "$name.jsx" -ItemType File
New-Item -Path "$Path/$name/" -Name "$name.module.css" -ItemType File
New-Item -Path "$Path/$name/" -Name "index.js" -ItemType File