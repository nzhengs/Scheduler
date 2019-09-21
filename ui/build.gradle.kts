import com.moowork.gradle.node.npm.NpmTask

plugins {
    java
    id("com.moowork.node") version "1.3.1"
}

tasks {
    val jar by getting(Jar::class) {
        from("build")
        into("static")
        dependsOn("npm_run_build")
    }

    val npmTest by creating(NpmTask::class) {
        setArgs(listOf("run", "test:ci"))
    }

    val test by getting(Test::class) {
        dependsOn(npmTest)
    }
}