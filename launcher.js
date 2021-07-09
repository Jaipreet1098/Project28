class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            lenght:10
        }

        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(bodyA){
        this.launcher.bodyA=bodyA;
    }

    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.pointA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
}