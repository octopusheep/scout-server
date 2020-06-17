// 节点组列表
var group = [
    {
        groupname: '192.168.130网段',
        note: '暂无'
    }, {
        groupname: '192.168.131网段',
        note: '暂无'
    }, {
        groupname: '192.168.132网段',
        note: '暂无'
    }, {
        groupname: '192.168.133网段',
        note: '暂无'
    }, {
        groupname: '原生集群',
        note: '暂无'
    }, {
        groupname: '网鼎机房',
        note: '暂无'
    }, {
        groupname: 'GPU节点',
        note: '暂无'
    }
];

//节点列表
var rent = [
    
    {
        renter: '全文奇',
        rentpurpose: '部署CPS 2.11.0 rc-03环境',
        renttime: '2020年7月30日',
        rentlist: ['192.168.130.2', '192.168.130.3']
    },
    {
        renter: '许照康',
        rentpurpose: '部署CPS2.8.5 rc-01环境',
        renttime: '2020年6月30日',
        rentlist: ['192.168.131.1', '192.168.131.2']
    },
    {
        renter: '刘应许',
        rentpurpose: '部署CLV 1.6.9 hotfix环境',
        renttime: '2020年9月3日',
        rentlist: ['192.168.133.3', '192.168.133.4', '192.168.133.5']
    },
]

var node = [
    
    {
        nodeip: '192.168.130.1',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.2',
        nodegroup: '192.168.130网段',
        nodepurpose: '部署CPS 2.11.0 rc-03环境',
        noderenter: '全文奇',
        nodedeadline: '2020年7月30日',
    },
    {
        nodeip: '192.168.130.3',
        nodegroup: '192.168.130网段',
        nodepurpose: '部署CPS 2.11.0 rc-03环境',
        noderenter: '全文奇',
        nodedeadline: '2020年7月30日',
    },
    {
        nodeip: '192.168.130.4',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.5',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.6',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.7',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.8',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.9',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.10',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.11',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.12',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.13',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.130.14',
        nodegroup: '192.168.130网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.1',
        nodegroup: '192.168.131网段',
        nodepurpose: '部署CPS 2.8.5 rc01环境',
        noderenter: '许照康',
        nodedeadline: '2020年9月',
    },
    {
        nodeip: '192.168.131.2',
        nodegroup: '192.168.131网段',
        nodepurpose: '部署CPS 2.8.5 rc01环境',
        noderenter: '许照康',
        nodedeadline: '2020年9月',
    },
    {
        nodeip: '192.168.131.3',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.4',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.5',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.6',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.7',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.8',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.9',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.10',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.11',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.12',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.13',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.14',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.15',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.16',
        nodegroup: '192.168.131网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.1',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.2',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.3',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.4',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.5',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.6',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.7',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.8',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.9',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.10',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.11',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.12',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.13',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.14',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.15',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.16',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.17',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.18',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.19',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.20',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.21',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.22',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.23',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.24',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.132.25',
        nodegroup: '192.168.132网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.1',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.2',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.3',
        nodegroup: '192.168.133网段',
        nodepurpose: '部署CLV 1.6.9 hotfix环境',
        noderenter: '刘应许',
        nodedeadline: '2020年9月3日',
    },
    {
        nodeip: '192.168.133.4',
        nodegroup: '192.168.133网段',
        nodepurpose: '部署CLV 1.6.9 hotfix环境',
        noderenter: '刘应许',
        nodedeadline: '2020年9月3日',
    },
    {
        nodeip: '192.168.133.5',
        nodegroup: '192.168.133网段',
        nodepurpose: '部署CLV 1.6.9 hotfix环境',
        noderenter: '刘应许',
        nodedeadline: '2020年9月3日',
    },
    {
        nodeip: '192.168.133.6',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.7',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.8',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.9',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.10',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.11',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.12',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.13',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.14',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.15',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.16',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.17',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.18',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.19',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.20',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.21',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.22',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.23',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.24',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.25',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.26',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.27',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.28',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.29',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.30',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.31',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.133.32',
        nodegroup: '192.168.133网段',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.23',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.24',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.25',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.26',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.27',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.131.28',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.139.1',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '192.168.139.2',
        nodegroup: '原生集群',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.23',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.24',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.25',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.26',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.27',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.28',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.29',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.30',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.31',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.13.32',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.14.6',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.14.7',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.14.8',
        nodegroup: '网鼎机房',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.12.1',
        nodegroup: 'GPU节点',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.14.1',
        nodegroup: 'GPU节点',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },
    {
        nodeip: '10.200.14.3',
        nodegroup: 'GPU节点',
        nodepurpose: '',
        noderenter: '',
        nodedeadline: '',
    },

];



var get_group = async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = group;
}

var get_node = async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = node;
}

var get_free_node = async (ctx, next) => {
    var final=[];
    for(let i=0;i<node.length;i++){
        if(node[i].nodepurpose===''){
            final.push(node[i].nodeip)
        }
    }


    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = final;
}

var get_rent = async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = rent;
}

var get_overview = async (ctx, next) => {

    var overview = [];
    var final = [];
    for (let i = 0; i < group.length; i++) {
        overview[i] = {};
        overview[i].title = group[i].groupname;
        overview[i].machineList = [];
        console.log(overview[i]);
        for (let j = 0; j < node.length; j++) {
            console.log('当前比对的IP:' + node[j].nodeip);
            if (node[j].nodegroup === group[i].groupname) {
                overview[i].machineList.push(
                    {
                        ip: node[j].nodeip,
                        enable: (node[j].nodepurpose !== "" ? false : true),
                        usage: node[j].nodepurpose,
                    }
                );
                console.log('加入该组:' + node[j].nodeip);
            } else {
                console.log('未加入该组:' + node[j].nodeip);
            }
        }
    }

    for (let i = 0; i < overview.length; i++) {
        if (overview[i].machineList.length !== 0) {
            final.push(overview[i]);
        }
    }

    console.log(final);
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = final;
}

var get_backup = async (ctx, next) => {

    var backup_list=[];

    backup_list.push(group);
    backup_list.push(node);
    backup_list.push(rent);
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = backup_list;
}

var delete_group = async (ctx, next) => {

    // await next();
    var group_name = ctx.request.body.groupname || '';

    var new_group = [];
    for (let i = 0; i < group.length; i++) {
        if (group_name !== group[i].groupname) {
            new_group.push(group[i])
        }
    }

    group = new_group;
    console.log(`delete_group: ${group}`);
    ctx.response.type = 'text/html';
    ctx.response.body = 'delete group success';
};

var delete_node = async (ctx, next) => {

    // await next();
    var node_ip = ctx.request.body.nodeip || '';

    var new_node = [];
    for (let i = 0; i < node.length; i++) {
        if (node_ip !== node[i].nodeip) {
            new_node.push(node[i])
        }
    }

    node = new_node;
    console.log(`delete_node: ${node}`);
    ctx.response.type = 'text/html';
    ctx.response.body = 'delete node success';
};

var delete_rent = async (ctx, next) => {

    // await next();
    var rent_purpose = ctx.request.body.rentpurpose || '';
    console.log('delete_rent()当前要删除的purpose:'+rent_purpose);

    for (let i = 0; i < rent.length; i++) {
        var param1=rent[i].rentpurpose
        if (rent_purpose===param1) {
            console.log('该序号需删除:'+i);
            var param2=rent[i].rentlist
            console.log('rent['+i+']:'+param2);
            for (let j = 0; j < param2.length; j++) {
                console.log('当前需要重置的节点ip:'+param2[j]);
                for (let k = 0; k < node.length; k++) {
                    if (rent[i].rentlist[j] === node[k].nodeip) {
                        node[k].nodepurpose = '';
                        node[k].noderenter = '';
                        node[k].nodedeadline = '';
                        console.log('重置node信息:'+node[k]);
                    }else{
                        console.log('该node不需重置:'+node[k]);
                    }
                }
            }
        }else{
            console.log('该序号不需删除');
        }
    }

    var new_rent = [];
    for (let i = 0; i < rent.length; i++) {
        if (rent_purpose !== rent[i].rentpurpose) {
            new_rent.push(rent[i])
        }
    }

    rent = new_rent;
    console.log(`delete_rent: ${rent}`);
    ctx.response.type = 'text/html';
    ctx.response.body = 'delete rent success';
};

var add_group = async (ctx, next) => {

    // await next();
    var group_name = ctx.request.body.groupname || '';
    var group_note = ctx.request.body.groupnote || '';
    group.push({
        groupname: group_name,
        note: group_note
    })
    console.log(`add_group: ${group_name}`);
    ctx.response.type = 'text/html';
    ctx.response.body = 'add group success';
};

var add_node = async (ctx, next) => {
    // await next();
    var node_ip = ctx.request.body.nodeip || '';
    var node_group = ctx.request.body.nodegroup || '';
    var node_purpose = ctx.request.body.nodepurpose || '';
    var node_renter = ctx.request.body.noderenter || '';
    var node_deadline = ctx.request.body.nodedeadline || '';

    node.push({
        nodeip: node_ip,
        nodegroup: node_group,
        nodepurpose: node_purpose,
        noderenter: node_renter,
        nodedeadline: node_deadline,
    })
    console.log(`add_node: ${node_ip}`);
    ctx.response.type = 'text/html';
    ctx.response.body = 'add node success';
};

var add_rent = async (ctx, next) => {
    // await next();
    var rent_er = ctx.request.body.renter || '';
    var rent_purpose = ctx.request.body.rentpurpose || '';
    var rent_time = ctx.request.body.renttime || '';
    var rent_list = ctx.request.body.rentlist || '';

    rent.push({
        renter: rent_er,
        rentpurpose: rent_purpose,
        renttime: rent_time[0].slice(0,10)+'至'+rent_time[1].slice(0,10),
        rentlist: rent_list,
    })
    console.log(`rent_time:`+rent_time);
    console.log(`add_rent: ${rent_purpose}`);


    for(let i=0;i<rent_list.length;i++){
        for(let j=0;j<node.length;j++){
            if(rent_list[i]===node[j].nodeip){
                node[j].nodepurpose=rent_purpose;
                node[j].noderenter=rent_er;
                node[j].nodedeadline=rent_time;
                console.log('更变node信息:'+node[j].nodepurpose);
            }
        }
    }

    ctx.response.type = 'text/html';
    ctx.response.body = 'add node success';
};

var restore = async (ctx, next) => {
    // await next();
    var restore_group = ctx.request.body.group || '';
    var restore_node = ctx.request.body.node || '';
    var restore_rent = ctx.request.body.rent || '';

    console.log(`restore_group:`+restore_group);
    console.log(`restore_node:`+restore_node);
    console.log(`restore_rent:`+restore_rent);

    group=restore_group;
    node=restore_node;
    rent=restore_rent;

    ctx.response.type = 'text/html';
    ctx.response.body = 'restore success';
};



module.exports = {
    'GET /group': get_group,
    'GET /node': get_node,
    'GET /freenode': get_free_node,
    'GET /rent': get_rent,
    'GET /overview': get_overview,
    'GET /backup': get_backup,
    'POST /delete_group': delete_group,
    'POST /delete_node': delete_node,
    'POST /delete_rent': delete_rent,
    'POST /add_group': add_group,
    'POST /add_node': add_node,
    'POST /add_rent': add_rent,
    'POST /restore': restore,
}


