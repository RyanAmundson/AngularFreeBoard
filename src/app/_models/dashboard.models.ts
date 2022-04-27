

export interface Dashboard {
    id: string,
    name: string,
    description: string,
    tiles: DashboardTile[];
}


export interface DashboardTile {
    component: any,
    dataSourceUrl: string,
    inputs: {},
    gridPosition: {
        x:number,
        y:number,
        h:number,
        w:number,
    },
    context: {}
}