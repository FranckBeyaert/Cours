# Notes GIT

Configurer git :
```
$ git config –global user.email sam@google.com
```

Vérifié le dépot si serveur distant :
```
$ git clone alex@93.188.160.58:/chemin/vers/dépôt
```

Ajouter de fichier à l'index :
```
$ git add 
```

Valider les modifications apportées :
```
$ git commit –m "Description du commit"

```

Récupéré le status ainsi que la liste des fichiers modifiés :
```
$ git status
```

Répertorier les branches :
```
$ git branch
```
Créer une branche puis basculer dessus :
```
$ git checkout -b <nom-branche>
```

Passer d'une branche à une autre :
```
$ git checkout <nom-branche>
```

Supprimer une branche :
```
$ git branch -d <nom-branche>
```

Récupérer les modifications présentes sur le dépot distant dans le repo local :
```
$ git pull
```

Fusionner une branche dans la branche active :
```
$ git merge <nom-branche>
```

Permet de visualiser les conflits d'un fichier :
```
$ git diff --base <nom-fichier>
```

Affiche les conflits entre branches à fusionner avant la fusion :
```
$ git diff <branche-source> <branche-cible>
```

Lister les conflits actuels : 
```
$ git diff
```

Supprimer des fichiers de l'index et du repo de travail :
```
$ git rm <nom-fichier>
```
https://itexpert.fr/blog/extensions-vscode/
