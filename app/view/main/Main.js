Ext.define('MyAppName.view.main.Main',{
    extend:'Ext.container.Viewport',

    requires:[
    'Ext.button.Segmented',
    'Ext.list.Tree',
    'MyAppName.view.main.NavigationTree'
    ],

    layout:{
        type:'hbox',
        align:'stretch'
    },

    items:[
    {
        xtype: 'treelist',
        ui: 'navigation',
        store: 'navigationtree1',
        width: 250,
        expanderFirst: false,
        expanderOnly: false
        //flex:1,
    },
    {
        xtype:'container',
        //flex:2,
        layout:{
            type:'card',
            anchor:'100%'
        }
    }
    ]



});

