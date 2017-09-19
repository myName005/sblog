<?php

return [


    'user' => [
    	'seeding'=>[
    		'count'=>50
    	],
        'pagination'=>[
            'count'=>20
        ]
    ],
    'article' => [
    	'seeding'=>[
    		'count'=>100
    	],
        'pagination'=>[
            'count'=>12
        ]
    ],
    'catigory' => [
    	'seeding'=>[
    		'count'=>10
    	],
        'pagination'=>[
            'count'=>12
        ]
    ],
    'image' => [
    	'directory'=>'public/images/',
    	'seeding'=>[
    		'files_count'=>100
    	],
    ],
];
