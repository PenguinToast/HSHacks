package com.coderaicing;

import org.jbox2d.collision.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

public class Car extends Body{
	public Car(World world)
	{
		BodyDef def = new BodyDef();
		def.linearDamping = (float)0.1;
		this();
	}
	public Car(BodyDef def, World world){
		super(def, world);
	}
	
	public void act()
	{
		//The written code goes here. Called every tick.
	}
	
	
}
