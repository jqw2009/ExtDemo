Ext.define('MyAppName.view.main.NavigationTree',{
	extend:'Ext.data.TreeStore',
	storeId:'navigationtree1',

/*	fields: [{
		name: 'text'
	}],*/
	root: {
		expanded: true,
		children: [{
			text: '应收结算',
                    //leaf: true,
                    expanded:true,
                    iconCls: 'x-fa fa-leanpub',
                    children:[
                    {
                    	text:'应收费用管理',
                    	leaf:true
                    },
                    {
                    	text:'应收账单管理',
                    	leaf:true
                    },
                    {
                    	text:'应收开票管理',
                    	leaf:true
                    }
                    ]
                }, {
                	text: '应付结算',
                	expanded: true,
                	iconCls: 'x-fa fa-leanpub',
                	children: [{
                		text: '应付费用管理',
                		leaf: true,
                		iconCls: 'x-fa fa-book'
                	}, {
                		text: '应付账单管理',
                		leaf: true,
                		iconCls: 'x-fa fa-graduation-cap'
                	}]
                }, {
                	text: '批量审核',
                	leaf: true,
                	iconCls: 'x-fa fa-usd'
                }]
            }


        });