<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdcf234b117c3c4de8557f6fa5f1811f0
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Models\\' => 7,
            'Mehdi\\Partie7Autoload\\' => 22,
        ),
        'E' => 
        array (
            'Exception\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Models',
        ),
        'Mehdi\\Partie7Autoload\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Exception\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Exception',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdcf234b117c3c4de8557f6fa5f1811f0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdcf234b117c3c4de8557f6fa5f1811f0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitdcf234b117c3c4de8557f6fa5f1811f0::$classMap;

        }, null, ClassLoader::class);
    }
}