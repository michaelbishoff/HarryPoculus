#pragma strict
var magicBullet : Transform;

function Start () {

}

// Should be a plane instead of cylindrical input
function Update () {
	if (Input.GetKeyUp("e")) {
		var magicFire = Instantiate (magicBullet, gameObject.Find("magicSpawnPoint").transform.position, Quaternion.Euler(90, 0, 0));
		var rb = magicFire.GetComponent.<Rigidbody>();
		rb.AddForce(transform.up * 2000);
	}
}

/*function ThrowMagic() {
	var baseTransform = this.GetComponentInChildren<Transform>(true)[0];
	var baseRotation = baseTransform.rotation;
	
}*/