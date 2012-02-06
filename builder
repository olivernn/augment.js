#!/usr/bin/env bash

read -r -d '' USAGE << 'EOF'\

  Builds augment.js, accepts the following switches:
    -h : prints this message
    -e : builds all methods except these ones
    -o : builds only these methods
    -m : whether to minify the output

  Examples:
    ./builder                     : builds all methods
    ./builder -m                  : builds all methods and minifies
    ./builder -e map              : builds all methods except map
    ./builder -e array -m         : builds all methods except array methods and minifies
    ./builder -o string           : builds only string methods
    ./builder -o "forEach map" -m : builds only forEach and map and minifies

EOF

while getopts "e:o:mh" OPTION
do
  case "$OPTION" in
    h) show_usage="1"
        ;;
    e) except="$OPTARG"
        ;;
    o) only="$OPTARG"
        ;;
    m) minify="1"
        ;;
    ?) exit 2
        ;;
  esac
done

if [[ $show_usage ]]; then
  echo "$USAGE"
  exit
fi

version=$(cat VERSION)

if [[ $except ]]; then
  version=$version".custom"
  shopt -s extglob
  methods=`echo $except | sed -e 's/ /|/g'`
  files="lib/!(*@($methods)*)"
else
  if [[ $only ]]; then
    version=$version".custom"
    for method in $only
    do
        files=$files" lib/*$method*"
    done
  else
    files=lib/augment*.js
  fi
fi

if [[ $minify ]]; then
  cat lib/header.js $files | sed "s/@VERSION/${version}/" | uglifyjs
else
  cat lib/header.js $files | sed "s/@VERSION/${version}/"
fi

shopt -u extglob
