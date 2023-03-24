<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita8692f55a878d13e7c5a0d856d25d8bf
{
    public static $prefixLengthsPsr4 = array (
        's' => 
        array (
            'src\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'src\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita8692f55a878d13e7c5a0d856d25d8bf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita8692f55a878d13e7c5a0d856d25d8bf::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita8692f55a878d13e7c5a0d856d25d8bf::$classMap;

        }, null, ClassLoader::class);
    }
}