@echo off
echo ========================================
echo NETTOYAGE DES FICHIERS BLOG OENOROS
echo ========================================
echo.

REM Suppression des dossiers problématiques
echo Suppression de src\types...
if exist src\types rmdir /s /q src\types

echo Suppression de src\data...
if exist src\data rmdir /s /q src\data

REM Suppression des pages blog
echo Suppression des pages blog...
if exist src\pages\Blog.tsx del /f /q src\pages\Blog.tsx
if exist src\pages\BlogPost.tsx del /f /q src\pages\BlogPost.tsx

REM Suppression du composant BlogCard
echo Suppression de BlogCard...
if exist src\components\BlogCard.tsx del /f /q src\components\BlogCard.tsx

echo.
echo ========================================
echo RESTAURATION DES FICHIERS ORIGINAUX
echo ========================================
echo.

REM Restauration depuis les backups
echo Restauration de App.tsx...
if exist src\App.tsx.backup (
    copy /y src\App.tsx.backup src\App.tsx
    echo App.tsx restaure !
) else (
    echo ATTENTION : App.tsx.backup introuvable !
)

echo Restauration de Header.tsx...
if exist src\components\Header.tsx.backup (
    copy /y src\components\Header.tsx.backup src\components\Header.tsx
    echo Header.tsx restaure !
) else (
    echo ATTENTION : Header.tsx.backup introuvable !
)

echo Restauration de sitemap.xml...
if exist public\sitemap.xml.backup (
    copy /y public\sitemap.xml.backup public\sitemap.xml
    echo sitemap.xml restaure !
) else (
    echo ATTENTION : sitemap.xml.backup introuvable !
)

echo.
echo ========================================
echo NETTOYAGE TERMINE !
echo ========================================
echo.
echo Maintenant tu peux push sur GitHub pour verifier que tout remarche.
echo Ensuite lance le script 2-installer.bat
echo.
pause
